import { Link } from 'react-router-dom'

const TagLinkTo = ({ children, style, ...props }) => {
  const meStyle = { textDecoration: 'none' }
  const attr = {
    style: style ? { ...meStyle, ...style } : meStyle,
    ...props
  }
  return <Link {...attr}>{children}</Link>
}
const TagLinkToA = ({ children, style, ...props }) => {
  const meStyle = { textDecoration: 'none' }
  const attr = {
    style: style ? { ...meStyle, ...style } : meStyle,
    ...props
  }
  return <a {...attr}>{children}</a>
}
export { TagLinkTo, TagLinkToA }
