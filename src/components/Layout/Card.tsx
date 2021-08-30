import { ReactNode } from 'react'

import s from './Card.module.scss'

type CardType = {
  children: ReactNode
}

const Card = ({ children }: CardType) => (
  <div className={s.root}>{children}</div>
)

export default Card
