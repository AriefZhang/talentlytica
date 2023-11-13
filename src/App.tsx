import React from "react"
import "./styles/global.css"

import { mockTablePenilaianMahasiswa } from "./common/mockData"
import { ValueAspekPenilaian } from "./types"

const TableRowPenilaianMahasiswa = React.lazy(
  () => import("./components/tables/TableRowPenilaianMahasiswa")
)
const TableHeadPenilaianMahasiswa = React.lazy(
  () => import("./components/tables/TableHeadPenilaianMahasiswa")
)

function App() {
  const [studentScore, setStudentScore] = React.useState<ValueAspekPenilaian>(
    {}
  )
  const [showOutput, setShowOutput] = React.useState<boolean>(false)

  const handleSelectChangeValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { ariaLabel, name, value } = event.target

    setStudentScore({
      ...studentScore,
      [ariaLabel!]: {
        ...studentScore[ariaLabel!],
        [name]: value,
      },
    })
  }

  const handleSave = () => {
    setShowOutput(true)
  }

  return (
    <div className='App flex-col flex-center'>
      <div className='mb-5 container-aplikasi-penilaian-mahasiswa flex-col'>
        <h1>Aplikasi Penilaian Mahasiswa</h1>

        <TableHeadPenilaianMahasiswa />

        {mockTablePenilaianMahasiswa.map((data) => {
          return (
            <TableRowPenilaianMahasiswa
              key={data.name}
              studentData={data}
              handleSelectChangeValue={handleSelectChangeValue}
            />
          )
        })}

        {!showOutput && (
          <button onClick={handleSave} className='save-button'>
            Simpan
          </button>
        )}
      </div>
      {showOutput && (
        <div className='flex-col flex-center'>
          {JSON.stringify(studentScore, null, 2)}
          <button onClick={() => setShowOutput(false)} className='save-button'>
            Hide Output
          </button>
        </div>
      )}
    </div>
  )
}

export default App
