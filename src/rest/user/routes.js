import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Get /user!')
})

export default router
