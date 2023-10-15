import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../Assets/theme'
import useMediaQuery from '../Constants/useMediaQuery'
import { AiOutlineUser } from 'react-icons/ai'
export default function Header() {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            width: '100vw',
            height: 70,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: `1.5px solid lightgray`,
        }}>
            <Link
                to={'/'}
                style={{
                    textDecoration: 'none',
                    marginBlock: 0,
                    color: colors.iconColor,
                    fontSize: mobile ? 25 : 35,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: "LEMONMILK-Bold",
                    cursor: 'pointer',
                }}>
                HOMEATZ
            </Link>
        </div>
    )
}