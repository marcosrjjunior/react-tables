import { ReactNode } from 'react'

import s from './Container.module.scss'

type ContainerType = {
  children: ReactNode
}

const Container = ({ children }: ContainerType) => (
  <div className={s.root}>{children}</div>
)

export default Container
