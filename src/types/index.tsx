export type Maybe<T> = T | null

export type AspekPenilaian =
  | "Aspek penilaian 1"
  | "Aspek penilaian 2"
  | "Aspek penilaian 3"
  | "Aspek penilaian 4"

export type StudentScoreData = {
  label: string
  name: string
  ariaLabelScore: string[]
}

export type NilaiMahasiswa = {
  [name: string]: string | number
}

export type ValueAspekPenilaian = {
  [name: string]: NilaiMahasiswa
}
