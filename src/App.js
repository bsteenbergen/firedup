import { useState, useEffect } from 'react'

function App() {
  const [eventData, setEventData] = useState([]);
  const [oading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = asynch () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
