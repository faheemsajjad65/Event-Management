import React from 'react'
import EventItem from './EventItem'

export default function EventsList({items}) {

  return (
    <ul>
      {
        items.map(event => 
          <EventItem 
            key={event.id}
            id={event.id} 
            title={event.title} 
            description={event.description} 
            location={event.location} 
          />
        )
      }
    </ul>
  )
}
