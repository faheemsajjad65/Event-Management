import React from 'react'
import { getAllEvents } from '../../dummy-data'

import EventsList from '../../components/events/EventsList'

const allEvents = getAllEvents()

export default function AllEventsPage() {
  return (
    <EventsList items={allEvents} />
  )
}
