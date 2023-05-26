import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const user = await req.container.cradle.getUser()
  res.status(200).json(user)
})

export default router
