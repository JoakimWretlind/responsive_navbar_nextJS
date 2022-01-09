import { useState } from "react"
import Link from "next/link"
import { Nav, NavUL, NavA, NavIcon } from "./navbar.style"
import { navbarData } from './navbarData'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const [navbar, setNavbar] = useState(false)

    const handleClick = (index) => {
        setIsActive(index)
        setNavbar(!navbar)
    }

    return (
        <>
            <NavIcon onClick={() => setNavbar(!navbar)}>
                {navbar ? <FaTimes /> : <FaBars />}
            </NavIcon>
            <Nav navbar={navbar}>
                <NavUL>
                    {navbarData.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.path}
                            passHref
                        >
                            <NavA
                                onClick={() => handleClick(index)}
                                className={`${index === isActive && 'active'}`}
                            >{item.title}</NavA>
                        </Link>
                    ))}
                </NavUL>
            </Nav>
        </>
    )
}

export default Navbar
