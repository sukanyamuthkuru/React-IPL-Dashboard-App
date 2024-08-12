// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = details
  let status
  if (matchStatus === 'Won') {
    status = 'match-card-status-won'
  } else {
    status = 'match-card-status-loss'
  }
  return (
    <li className="match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-car-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
