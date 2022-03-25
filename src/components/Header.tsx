import React from 'react'
import Button from './Button'
import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.jpg'
import { SearchIcon } from './Icons'

interface LayoutProps {
    // children: any
}

export default function Header(props: LayoutProps) {
    return (
        <header className={`gap-x-6 gap-y-6 col-span-12 border-2 border-slate-600`}>
            <div className={`flex justify-between items-center p-4`}>
                <img src={logo} alt="Logo do site" className={`h-8`} />
                <Button title='Login' type="outline" />
                <Button type="icon">{SearchIcon}</Button>
            </div>
            <div>
                <img src={banner} alt="Banner do Site" />
            </div>
        </header>
    )
}