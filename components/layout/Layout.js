import Navbar from "../navbar/navbar"

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
