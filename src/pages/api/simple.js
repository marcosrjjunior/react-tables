import simple from 'data/simple'
import { chunk } from 'lodash'

export default function handler(req, res) {
  const { page = 1, perPage = 40 } = req.query

  if (page < 1) return 'Invalid page value'

  const data = chunk(simple, perPage)
  const pages = data.length

  res.status(200).json({ data: data[page - 1], pages })
}
