import "./Location.css"
export default function Location({ location }) {
  return (
    <article class = "storedLoc">
      {!location ? (
        <p id="holderP"></p>
      ) : (
        <location>
          <section>
            <p className="currentLoc">{`Current Location: ${location.currentLoc}`}</p>
            <p className="homeLoc">{`Home Location: ${location.homeLoc}`}</p>
          </section>
        </location>
      )}
    </article>
  )
}
