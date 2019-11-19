import NextLink, { LinkProps } from 'next/link'
import { format } from 'url'

const Link: React.FunctionComponent<LinkProps> = ({ children, ...props }) => (
  <NextLink {...props} as={`${process.env.BASE_PATH}${format(props.href)}`}>
    {children}
  </NextLink>
)

export default Link
