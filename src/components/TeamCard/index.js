// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {teamImageUrl, name, id} = teamDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="teamCard-list-item-container">
          <img src={teamImageUrl} className="team-image" alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
