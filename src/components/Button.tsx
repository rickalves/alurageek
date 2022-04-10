import React from 'react'
import styles from '../styles/Button.module.css'
interface BtnProps {
    title?: string
    children?: any
    type?: string
    className?: string
}

export default function Button(props: BtnProps) {
    return (
        <button
            className={`${props.type === 'outline' ? styles.btn__outline : ''}
                        ${props.type === 'primary' ? styles.btn__primary : ''}
                        ${props.type === 'icon' ? styles.btn__icon : ''} ${props.className}`}>
            {props.title}
            {props.children}
        </button>
    )
}