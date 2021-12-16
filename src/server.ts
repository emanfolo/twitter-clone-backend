import express from 'express';
import userRouter from '../routes/user'
import feedRouter from '../routes/feed'

const app = express()
app.use('/user', userRouter)
app.use('/feed', feedRouter)

app.get('/', (req: any, res: any) => {
  res.send('Welcome to the Flitter api')
})

app.listen(4000, () => console.log('Server up'))







