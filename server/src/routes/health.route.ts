import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/',(_req,res)=>{
   res.send('Takumi Backend is running!!!')
})


export default healthRouter