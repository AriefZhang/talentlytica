import React from "react"
import "./styles/global.css"

import { mockTablePenilaianMahasiswa } from "./common/mockData"
import useAppPage from "./App.hooks"

const TableRowPenilaianMahasiswa = React.lazy(
  () => import("./components/tables/TableRowPenilaianMahasiswa")
)
const TableHeadPenilaianMahasiswa = React.lazy(
  () => import("./components/tables/TableHeadPenilaianMahasiswa")
)

function App() {
  const {
    state: appPageState,
    setState: appPageSetState,
    action: appPageAction,
  } = useAppPage()

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
              handleSelectChangeValue={appPageSetState.handleSelectChangeValue}
            />
          )
        })}

        {!appPageState.showOutput && (
          <button onClick={appPageAction.handleSave} className='save-button'>
            Simpan
          </button>
        )}
      </div>
      {appPageState.showOutput && (
        <div className='flex-col flex-center'>
          {JSON.stringify(appPageState.studentScore, null, 2)}
          <button
            onClick={() => appPageSetState.setShowOutput(false)}
            className='save-button'
          >
            Hide Output
          </button>
        </div>
      )}
    </div>
  )
}

export default App
