import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({path: '../.env'})

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

const authenticateToken = (req: any, res:any, next:any) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

router.get('/:username', async (req:any, res:any) => {

  // const userFeed = prisma.tweet.findMany({
  //   where: {
  //     OR:[
  //       {
  //       user: {
  //         username: {
  //           contains: req.params.username
  //         }
  //       }
  //     }, 
  //     retweets: {
  //       userID: {
  //         contains: 14
  //       }
  //     }

  //     ]
  //   },
  // })
  
  // const userTweets = await prisma.tweet.findMany({
  //   where: {
  //     user: {
  //       username: {
  //         contains: req.params.username
  //       }
  //     }
  //   },
  //   select: {
  //     id: true,
  //     user: {
  //       select: {
  //         id: true,
  //         name: true,
  //         username: true,
  //         profile: {
  //           select: {
  //             id: true,
  //             image: true,
  //             header_image: true,
  //             bio: true
  //           }
  //         },
  //       }
  //     },
  //     contents: true,
  //     image: true,
  //     createdAt: true, 
  //     retweets: {
  //       select: {
  //         id: true,
  //         tweetID: true,
  //         userID: true
  //       }
  //     },
  //     likes: {
  //       select: {
  //         id: true,
  //         tweetID: true,
  //         userID: true
  //       }
  //     },
  //     threadSuccessorID: true
  //   }
  // })

  // const userRetweets = await prisma.retweet.findMany({
  //   where: {
  //     user: {
  //       username: {
  //         contains: req.params.username
  //       }
  //     }
  //   }, 
  //   select: {
  //     id: true, 
  //     createdAt: true,
  //     user: {
  //       select:{
  //       name: true,
  //       username: true,
  //       profile: {
  //         select: {
  //           image: true,
  //           header_image: true,
  //           bio: true,
  //         }
  //       }
  //       }
  //     },
  //     tweet: {
  //       select: {
  //         id: true,
  //         contents: true,
  //         createdAt: true,
  //         image: true,
  //         retweets: {
  //           select: {
  //             id: true,
  //             tweetID: true,
  //             userID: true
  //             }
  //           },
  //         likes: {
  //           select: {
  //             id: true,
  //             tweetID: true,
  //             userID: true
  //           }
  //         },
  //         user: {
  //           select: {
  //             id: true,
  //             name: true,
  //             username: true,
  //             profile: {
  //               select: {
  //                 id: true,
  //                 image: true,
  //                 header_image: true,
  //                 bio: true
  //               }
  //             },
  //             followedBy: {
  //             select: {
  //               id: true,
  //               username: true
  //               } 
  //             },
  //             following:  {
  //               select: {
  //                 id: true,
  //                 username: true
  //               }
  //             }
  //           }
  //         },
  //        threadSuccessorID: true
  //       }
  //     }
  //   }
  // })

  // const individualFeed = [...userTweets, ...userRetweets]

  // res.send(individualFeed)

  const user = await prisma.user.findUnique({
    where: {
      username: req.params.username
    },
    select: {
      id: true
    }
  })

  if (user){
    const userFeed = await prisma.feedItem.findMany({
    where: {
      userID: user.id
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      type: true,
      tweet: {
        select:{
          id: true,
          contents: true,
          createdAt: true,
          image: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true,
                }
              }
            }
          },
          retweets: true,
          likes: true,
          hashtags: true,
          mentions: true,
          threadSuccessor: true,
          threadPredecessor: true
        }
      },
      retweet: {
        select: {
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })

  res.send(userFeed)
  }

})

router.get('/', authenticateToken, async (req:any , res:any) => {

  const feedArray: Array<number> = [req.user.id]


  const userAndFollowing = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    select: {
      following: true
    }
  })

  const addFollowingToFeed = async (userAndFollowing:any) => {
    userAndFollowing.following.forEach(element => {
      feedArray.push(element.id)
    });
  }

  addFollowingToFeed(userAndFollowing)


  const tweets = await prisma.tweet.findMany({
    where: {
      userID: { in: feedArray },
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      contents: true,
      createdAt: true,
      image: true,
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          profile: true,
          followedBy: {
            select: {
              id: true,
              username: true
            }
          },
          following:  {
            select: {
              id: true,
              username: true
            }
          }
        }
      },
      hashtags: {
        select: {
          id: true,
          contents: true,
        }
      }, 
      likes: {
        select: {
          id: true, 
          userID: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: {
                select: {
                  id: true,
                  username: true
                }
              },
              following: {
                select: {
                  id: true,
                  username: true
                }
              },
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true
                }
              }
            }
          }
        }
      },
      retweets: {
        select: {
          id: true, 
          userID: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
              followedBy: {
                select: {
                  id: true,
                  username: true
                }
              },
              following: {
                select: {
                  id: true,
                  username: true
                }
              },
              profile: {
                select: {
                  image: true,
                  header_image: true,
                  bio: true
                }
              }
            }
          }
        }
      }, 
      threadSuccessorID: true
    }
  })

  res.send(tweets)

})

export default router

