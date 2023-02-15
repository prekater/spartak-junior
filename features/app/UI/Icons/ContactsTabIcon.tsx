import type { IconProps } from './types'

export const ContactsTabIcon = ({ width = 12, height = 13, viewBox = '0 0 12 13', fill = '#d2d2d2', ...rest }: IconProps) => (
  <svg viewBox={viewBox} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y=".5" width="10" height="12" rx="1.5" stroke="#000" />
    <rect y="2" height="1" rx=".5" fill="#000" style={{ width: '3px', stroke: 'none!important' }} />
    <rect y="4" height="1" rx=".5" fill="#000" style={{ width: '3px', stroke: 'none!important' }} />
    <rect y="6" height="1" rx=".5" fill="#000" style={{ width: '3px', stroke: 'none!important' }} />
    <rect y="8" height="1" rx=".5" fill="#000" style={{ width: '3px', stroke: 'none!important' }} />
    <rect y="10" height="1" rx=".5" fill="#000" style={{ width: '3px', stroke: 'none!important' }} />
    <circle cx="6.5" cy="4.5" r="1.5" fill="#000" />
    <path d="M4 9.5a2.5 2.5 0 0 1 5 0v.5H4v-.5z" fill="#000" />
  </svg>
)
