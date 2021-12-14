export default function Location({ article }) {
  return (
    <article>
      {!article ? (
        <p></p>
      ) : (
        <location>
          <section>
            <h2>{article.title}</h2>
            <p className="currentLoc">{`Current Location: ${article.currentLoc}`}</p>
            <p className="homeLoc">{`Home Location: ${article.homeLoc}`}</p>
          </section>
        </location>
      )}
    </article>
  )
}
