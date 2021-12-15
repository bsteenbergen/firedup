export default function Location({ location }) {
  return (
    <article>
      {!location ? (
        <p></p>
      ) : (
        <location>
          <section>
            <h2>{location.title}</h2>
            <p className="currentLoc">{`Current Location: ${location.currentLoc}`}</p>
            <p className="homeLoc">{`Home Location: ${location.homeLoc}`}</p>
          </section>
        </location>
      )}
    </article>
  )
}
