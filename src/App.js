import { useState } from "react"
import "./App.css"

import { mockTablePenilaianMahasiswa } from "./common/mockData"

import TableRowPenilaianMahasiswa from "./components/tables/TableRowPenilaianMahasiswa"
import TableHeadPenilaianMahasiswa from "./components/tables/TableHeadPenilaianMahasiswa"

function App() {
  const [studentScore, setStudentScore] = useState({})
  const [showOutput, setShowOutput] = useState(false)

  const handleSelectChangeValue = (event) => {
    const { ariaLabel, name, value } = event.target

    setStudentScore({
      ...studentScore,
      [ariaLabel]: {
        ...studentScore[ariaLabel],
        [name]: value,
      },
    })
  }

  const handleSave = () => {
    setShowOutput(true)
  }

  return (
    <div className='App flex-col flex-center'>
      <div className='container-aplikasi-penilaian-mahasiswa flex-col'>
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
