import React from 'react'
import styles from './styles.module.css'

function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <nav>about navbar</nav>
        <main className={styles.main}>{children}</main>
        </>
    )
}

export default AboutLayout;