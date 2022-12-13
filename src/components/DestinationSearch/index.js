import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  onsearch = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state
    const ip = searchinput.toLowerCase()
    const searchresults = destinationsList.filter(user =>
      user.name.includes(ip),
    )

    return (
      <div className="bg-container">
        <h1 className="page-head">Destination Search</h1>
        <div className="input-container">
          <input
            className="input-container"
            onChange={this.onsearch}
            type="search"
            placeholder="search"
          />
          <img
            className="inputimg"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="items-container">
          {searchresults.map(eachuser => (
            <DestinationItem key={eachuser.id} item={eachuser} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
