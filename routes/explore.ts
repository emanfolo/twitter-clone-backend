import express from "express";
import { PrismaClient } from "@prisma/client";
import cors  from 'cors'

const prisma = new PrismaClient()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const router = express.Router()
router.use(express.json())
router.use(cors(options))

router.get('/profile/:id', async (req:any, res: any) => {

  const requestedProfile = await prisma.user.findUnique({
    where: {
      id: req.params.id
    },
    select: {
      name: true,
      username: true,
      createdAt: true,
      profile: {
        select: {
          image: true,
          header_image: true,
          bio: true
        }
      },
      tweets:{
        select: {
          id: true,
          contents: true,
          createdAt: true, 
          image: true,
          hashtags: {
            select: {
              id: true,
              contents: true
            }
          },
          threadSuccessorID: true
        }
      },
      retweets: {
        select: {
          id: true,
          tweet: {
            select: {
              id: true,
              contents: true,
              createdAt: true,
              image: true, 
              hashtags: {
                select: {
                  id: true,
                  contents: true
                }
              },
              user: {
                select: {
                  id: true,
                  name: true,
                  username: true,
                  profile: {
                    select: {
                      id: true,
                      image: true,
                      header_image: true,
                      bio: true
                    }
                  },
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
              }
            }
          }
        }
      },
      likes: {
        select: {
          createdAt: true,
          id: true,
          tweet: {
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
                  profile: {
                    select: {
                      id: true,
                      image: true,
                      header_image: true,
                      bio: true
                    }
                  },
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
                  },
                }               
              },
              threadSuccessorID: true
            }
          }
        }

      },
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
  })

  if (requestedProfile){
    res.send(requestedProfile)
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }

})

export default router