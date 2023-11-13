import React from "react"
import { ValueAspekPenilaian } from "./types"

export default function useAppPage() {
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
  return {
    state: { studentScore, showOutput },
    setState: { setStudentScore, setShowOutput, handleSelectChangeValue },
    action: { handleSave },
  }
}
