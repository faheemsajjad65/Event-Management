import { getFeaturedEvents } from '../dummy-data'
import EventsList from '../components/events/EventsList'

export default function HomePage() {
  const allFeaturedEvents = getFeaturedEvents()
  
  return (
    <EventsList items={allFeaturedEvents} />
  )
}
