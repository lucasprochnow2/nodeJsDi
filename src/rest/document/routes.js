import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Get /document!')
})

export default router
