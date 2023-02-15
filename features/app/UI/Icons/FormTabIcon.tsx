import type { IconProps } from './types'

export const FormTabIcon = ({ width = 10, height = 14, viewBox = '0 0 10 14', fill = '#d2d2d2', ...rest }: IconProps) => (
  <svg viewBox={viewBox} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" fill="#000" />
    <rect x=".5" y="2.5" width="9" height="11" rx="1.5" stroke="#000" />
    <path fill="#000" d="M2 6h5v1H2zM2 8h5v1H2zM2 10h4v1H2z" />
  </svg>
)
