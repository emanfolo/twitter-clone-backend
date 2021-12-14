import express from 'express'


const app = express()

app.listen(3000, () => console.log('Server up'))

app.get('/', (req, res) => {

  res.send('Welcome to the flitter backend API')

})


