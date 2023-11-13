import React from "react"

import UserIcon from "../../assets/icons/male-user.png"
import { StudentScoreData } from "../../types"

type TableRowPenilaianMahasiswaProps = {
  handleSelectChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
  studentData: StudentScoreData
}

export default function TableRowPenilaianMahasiswa(
  props: TableRowPenilaianMahasiswaProps
) {
  const { handleSelectChangeValue, studentData } = props
  return (
    <div className='student-form-wrapper flex-row'>
      <div className='student-identity flex-row'>
        <img src={UserIcon} alt='mahasiswa-1' className='student-avatar' />
        <div className='student-name main-font-small'>{studentData.label}</div>
      </div>

      {studentData.ariaLabelScore.map((score) => {
        return (
          <div className='select-wrapper' key={studentData.name + "-" + score}>
            <select
              className='select-student-score'
              defaultValue={0}
              aria-label={score}
              name={studentData.name}
              onChange={handleSelectChangeValue}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((scoreValue) => {
                return (
                  <option value={scoreValue} key={scoreValue}>
                    {scoreValue}
                  </option>
                )
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}
