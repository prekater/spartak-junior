import type { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string
  width?: number
  height?: number
  viewBox?: string
}
