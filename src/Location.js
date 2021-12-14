export default function Location({ article }) {
  return (
    <article>
      {!article ? (
        <p></p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="currentLoc">{`Posted: ${article.currentLoc}`}</p>
          <p className="homeLoc">{article.homeLoc}</p>
        </section>
      )}
    </article>
  )
}
