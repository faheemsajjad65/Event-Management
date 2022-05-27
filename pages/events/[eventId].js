import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import Link from 'next/link'

export default function EventDetailPage() {
  const router = useRouter();

  const {eventId} = router.query;

  const eventDetails = getEventById(eventId);

  if(! eventDetails){
    // return error message
    return (<h1>No Event Found!</h1>)
  }

  return (
    <>
      {eventDetails.title}
      <br />
      {eventDetails.description}
      <br />
      {eventDetails.location}
      <br />
      <Link href={`/`} >Go Back</Link>
    </>
  )
}
