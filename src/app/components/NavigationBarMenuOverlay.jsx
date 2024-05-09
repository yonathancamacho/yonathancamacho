import NavigationLink from './NavigationLink'
import React from 'react'

const NavigationBarMenuOverlay = ({ navigationLinks }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                navigationLinks.map((link, index) => (
                    <li key={index}>
                        <NavigationLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default NavigationBarMenuOverlay
