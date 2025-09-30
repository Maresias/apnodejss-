import 'dotenv/config'
import { app } from './app'
import { prisma } from 'src/prisma/prisma.client'

prisma.connect().then(() => {
  app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
})



