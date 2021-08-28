import { ReactNode } from 'react'

import cx from 'classnames'

import s from './Table.module.scss'

interface Props {
  striped?: boolean
  className?: string
  children: ReactNode
}

const Table = ({
  children,
  striped = false,
  className = '',
  ...props
}: Props) => (
  <table
    className={cx(
      s.root,
      {
        [s.striped]: striped
      },
      className
    )}
    {...props}
  >
    {children}
  </table>
)

export default Table
