export type Member = {
  id: number
  name: string
  born?: Date
  death?: Date
  cod?: string

  parents?: number[]
  partners?: number[]
  children?: { [key: number]: number[] }
}