import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Footer } from './footer/Footer.container'
import NavigationTop from './top/NavigationTop.container'

export const Wrapper = styled.div`
    width: 100%;
`

export const Body = styled.div`
`

const withoutNavigation = [
    '/board',
    '/query',
    '/login',
    '/signup'
]

const Layout = ({children}) => {
    const router = useRouter()
    const isNavigation = !withoutNavigation.includes(router.pathname)
    return (
        <>
        <Wrapper>
            {isNavigation && <NavigationTop />}
            <Body>{children}</Body>
            {isNavigation && <Footer />}
        </Wrapper>
        </>
    )

}

export default Layout