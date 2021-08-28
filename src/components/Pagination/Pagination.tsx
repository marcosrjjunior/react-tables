import { memo } from 'react'

import s from './Pagination.module.scss'

interface Props {
  totalPages: number
  page: number
  onPageChange: any
  className?: string
}

const Pagination = ({
  totalPages,
  page,
  onPageChange,
  className = ''
}: Props) => (
  <div className={`${s.root} ${className}`}>
    <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
      {`<`} Prev
    </button>

    <select onChange={e => onPageChange(Number(e.target.value))} value={page}>
      {Array.from(Array(totalPages).keys()).map(n => {
        const number = n + 1

        return (
          <option key={number} value={number}>
            {number}
          </option>
        )
      })}
    </select>

    <span>of {totalPages}</span>

    <button
      onClick={() => onPageChange(page + 1)}
      disabled={page >= totalPages}
    >
      Next {`>`}
    </button>
  </div>
)

export default memo(Pagination)
