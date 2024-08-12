import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  renderingTheTeamsList = () => {
    const {teamsList} = this.state
    return (
      <div className="fetched-data-container">
        <div className="ipl-logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-card-list-container">
          {teamsList.map(each => (
            <TeamCard key={each.id} teamDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, updatedData} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderingTheTeamsList()
        )}
      </div>
    )
  }
}

export default Home
