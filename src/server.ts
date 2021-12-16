import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../prisma/generated/type-graphql'
import { PrismaClient } from '@prisma/client';
import userRouter from '../routes/user'

const bootstrap = async () => {

  const prisma = new PrismaClient()

  const schema = await buildSchema({
  resolvers,
  validate: false,
  })

  const apolloserver = new ApolloServer({
    schema, 
    context: () => ({prisma})
  });

  await apolloserver.start()

  const app = express()

  apolloserver.applyMiddleware({app})

  app.use('/user', userRouter)
  
  app.listen(4000, () => console.log('Server up'))

}

bootstrap()




