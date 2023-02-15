import type { IconProps } from './types'

export const BackArrow = ({ stroke = 'currentColor', width = 21, height = 21, viewBox = '0 0 21 21', ...rest }: IconProps) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" stroke={stroke}>
    <path d="M10.5 2L2 10.5L10.5 19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 10.4999H2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
