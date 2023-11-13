import React from "react"
import { titleAspekPenilaian } from "../../common/mockData"

export default function TableHeadPenilaianMahasiswa() {
  return (
    <div className='flex-row table-head-wrapper'>
      <div className='student-identity' />
      {titleAspekPenilaian.map((title) => {
        return (
          <div key={title} className='title-column main-font-small'>
            {title}
          </div>
        )
      })}
    </div>
  )
}
