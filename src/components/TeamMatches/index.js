// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const colors = [
  {
    gradientId: 'RCB',
    gradient: 'RCB-colors',
  },

  {
    gradientId: 'KKR',
    gradient: 'KKR-colors',
  },
  {
    gradientId: 'KXP',
    gradient: 'KXP-colors',
  },
  {
    gradientId: 'CSK',
    gradient: 'CSK-colors',
  },
  {
    gradientId: 'RR',
    gradient: 'RR-colors',
  },
  {
    gradientId: 'MI',
    gradient: 'MI-colors',
  },
  {
    gradientId: 'SH',
    gradient: 'SH-colors',
  },
  {
    gradientId: 'DC',
    gradient: 'DC-colors',
  },
]

class TeamMatches extends Component {
  state = {
    isLoading: true,
    gradientBackground: '',
    latestMatchDetails: '',
    recentMatchDetails: [],
    teamBannerUrls: '',
  }

  componentDidMount() {
    this.getTeamsMatchesData()
  }

  getTeamsMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails, recentMatches} = updatedData
    const updatedLatestMatches = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.matchStatus,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedresentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const color = colors.filter(each => each.gradientId === id)

    this.setState({
      teamBannerUrls: updatedData.teamBannerUrl,
      gradientBackground: color[0],
      isLoading: false,
      latestMatchDetails: updatedLatestMatches,
      recentMatchDetails: updatedresentMatches,
    })
  }

  renderingTeamMatches = () => {
    const {
      gradientBackground,
      teamBannerUrls,
      latestMatchDetails,
      recentMatchDetails,
    } = this.state

    const {gradient} = gradientBackground

    return (
      <div className="team-matches-containers">
        <img src={teamBannerUrls} alt="team banner" className="team-banner" />
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch details={latestMatchDetails} />
        <ul className="match-card-container">
          {recentMatchDetails.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {
      gradientBackground,
      teamBannerUrls,
      latestMatchDetails,
      recentMatchDetails,
      isLoading,
    } = this.state

    const {gradient} = gradientBackground

    return (
      <div className={`team-matches-container ${gradient}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderingTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
