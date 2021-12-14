import { useState } from "react"

export default function LocationEntry({ addArticle }) {
  const [currentLoc, setCurrentLoc] = useState("")
  const [homeLoc, setHomeLoc] = useState("")
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!currentLoc.trim() || !homeLoc.trim()) {
      setError("Both the locations must be supplied")
    } else {
      addArticle({ currentLoc, homeLoc })
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Current Location:
        <input
          value={currentLoc}
          onChange={(e) => setCurrentLoc(e.target.value)}
        />
        Home Location:
        <textarea
          rows="8"
          value={homeLoc}
          onChange={(e) => setHomeLoc(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
