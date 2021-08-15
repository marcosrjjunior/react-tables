import simple from 'data/simple'

export default function handler(req, res) {
  res.status(200).json(simple)
}