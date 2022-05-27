import React from 'react'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <header>
        <div>
            <Link href="/">
                World Events
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    All Events
                </li>
                <li>
                    My Events
                </li>
                <li>
                    Bookings
                </li>
            </ul>
        </nav>
    </header>
  )
}
