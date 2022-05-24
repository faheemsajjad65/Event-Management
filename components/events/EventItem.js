import React from 'react'
import Link from 'next/link'

export default function EventItem(props) {
  
  const { id , title, description , location } = props;

  return (
    <li >
      {title}
      <br />
      {description}
      <br />
      {location}
      <br />
      <Link href={`events/${id}`} >Details</Link>
    </li>
  )
}
