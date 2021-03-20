import "@emotion/react"
import { IPalette } from "../your-palette"

declare module "@emotion/react" {
  export interface Theme extends IPalette {}
}

export type ColorNumber = {
  [key: string]: number[]
}
