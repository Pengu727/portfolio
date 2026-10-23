import { BODY, ICON_STYLE } from '../lib/icons'

export default function Icon({ name, size = 20, className = '', title }) {
  if (!BODY[name]) return null

  const style = ICON_STYLE[name]
  const common = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': title ? undefined : 'true',
    focusable: 'false',
  }

  const body = (
    <>
      {title && <title>{title}</title>}
      {BODY[name]}
    </>
  )

  if (style === 'fill') {
    return (
      <svg {...common} fill="currentColor">
        {body}
      </svg>
    )
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {body}
    </svg>
  )
}
