import type { IconProps } from './types'

export const ChatTabIcon = ({ width = 13, height = 12, viewBox = '0 0 13 12', fill = '#d2d2d2', ...rest }: IconProps) => (
  <svg viewBox={viewBox} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h.5v1.793a.707.707 0 0 0 1.207.5L7 9h3a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3z"
    />
    <path
      d="M3.5 9H4v-.5h-.5V9zm1.207 2.293l.354.353-.354-.353zM7 9v-.5h-.207l-.147.146L7 9zM1.5 3A1.5 1.5 0 0 1 3 1.5v-1A2.5 2.5 0 0 0 .5 3h1zm0 4V3h-1v4h1zM3 8.5A1.5 1.5 0 0 1 1.5 7h-1A2.5 2.5 0 0 0 3 9.5v-1zm.5 0H3v1h.5v-1zm.5 2.293V9H3v1.793h1zm.207.207A.207.207 0 0 1 4 10.793H3C3 11.46 3.54 12 4.207 12v-1zm.147-.06a.207.207 0 0 1-.147.06v1c.32 0 .627-.127.854-.354l-.707-.707zm2.292-2.294L4.354 10.94l.707.707 2.293-2.292-.708-.708zM10 8.5H7v1h3v-1zM11.5 7A1.5 1.5 0 0 1 10 8.5v1A2.5 2.5 0 0 0 12.5 7h-1zm0-4v4h1V3h-1zM10 1.5A1.5 1.5 0 0 1 11.5 3h1A2.5 2.5 0 0 0 10 .5v1zm-7 0h7v-1H3v1z"
      fill="#000"
    />{' '}
  </svg>
)
