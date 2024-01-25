import React from 'react'
import Books from '../components/books'
import Contact from '../components/contact'

function Home() {
    const data = [
        { title: ' كتب الدعم الفني   ', pdf: 'https://al-motamizon.com/ar', link: 'technical-support' },
        { title: ' كتب الإدارة المكتبية   ', pdf: 'https://al-motamizon.com/ar', link: 'Office-administration' },
        { title: ' كتب الإدارة الكترونيات   ', pdf: 'https://al-motamizon.com/ar', link: 'Electronics-management' },
        { title: ' كتب الإدارة الميكانيكا   ', pdf: 'https://al-motamizon.com/ar', link: 'Mechanics-management' },
    ]

    return (
        <div>
            <Books data={data} />
            <Contact></Contact>
        </div>
    )
}

export default Home