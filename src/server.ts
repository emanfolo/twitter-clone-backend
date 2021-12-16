import express from 'express';
import userRouter from '../routes/user'

const app = express()
app.use('/user', userRouter)

app.get('/', (req: any, res: any) => {
  res.send('Welcome to the Flitter api')
})

app.listen(4000, () => console.log('Server up'))







