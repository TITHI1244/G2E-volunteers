import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright ©️ G2E Digital {currentYear}; tithi124410@gmail.com; +45 91 62 76 55
        </footer>
    )
}
