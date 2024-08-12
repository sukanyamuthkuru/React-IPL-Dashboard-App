// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <div className="latest-container">
      <div className="lates-part-1">
        <p className="part-1-heading">{competingTeam}</p>
        <p className="part-1-date">{date}</p>
        <p className="part-1-venue">{venue}</p>
        <p className="part-1-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="latest-part-2">
        <p className="first-innings-h">First Innings</p>
        <p className="first-innings">{firstInnings}</p>
        <p className="first-innings-h">Second Innings</p>
        <p className="first-innings">{secondInnings}</p>
        <p className="first-innings-h">Man Of The Match</p>
        <p className="first-innings">{manOfTheMatch}</p>
        <p className="first-innings-h">Umpires</p>
        <p className="first-innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
