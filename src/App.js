import { useState } from "react"
import "./App.css"

import UserIcon from "./assets/icons/male-user.png"

function App() {
  const [studentScore, setStudentScore] = useState({})

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
    console.log(studentScore)
  }

  return (
    <div className='App flex-col flex-center'>
      <div className='container-aplikasi-penilaian-mahasiswa flex-col'>
        <h1>Aplikasi Penilaian Mahasiswa</h1>

        <div className='flex-row table-head-wrapper'>
          <div className='student-identity' />
          <div className='title-column main-font-small'>Aspek penilaian 1</div>
          <div className='title-column main-font-small'>Aspek penilaian 2</div>
          <div className='title-column main-font-small'>Aspek penilaian 3</div>
          <div className='title-column main-font-small'>Aspek penilaian 4</div>
        </div>

        <div className='student-form-wrapper flex-row'>
          <div className='student-identity flex-row'>
            <img src={UserIcon} alt='mahasiswa-1' className='student-avatar' />
            <div className='student-name main-font-small'>Mahasiswa 1</div>
          </div>
          <div className='select-wrapper'>
            <select
              className='select-student-score'
              defaultValue={1}
              aria-label='aspek_penilaian_1'
              name='mahasiswa_1'
              onChange={handleSelectChangeValue}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className='select-wrapper'>
            <select
              className='select-student-score'
              defaultValue={1}
              aria-label='aspek_penilaian_2'
              name='mahasiswa_1'
              onChange={handleSelectChangeValue}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className='select-wrapper'>
            <select
              className='select-student-score'
              defaultValue={1}
              aria-label='aspek_penilaian_3'
              name='mahasiswa_1'
              onChange={handleSelectChangeValue}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div className='select-wrapper'>
            <select
              className='select-student-score'
              defaultValue={1}
              aria-label='aspek_penilaian_4'
              name='mahasiswa_1'
              onChange={handleSelectChangeValue}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>
        <button onClick={handleSave} className='save-button'>
          Simpan
        </button>
      </div>
    </div>
  )
}

export default App
