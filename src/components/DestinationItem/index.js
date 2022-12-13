import './index.css'

import DestinationSearch from '../DestinationSearch'

const DestinationItem = props => {
  const {item} = props
  const {id, name, imgUrl} = item
  return (
    <li className="item-container">
      <img className="itemimg" src={imgUrl} alt={name} />
      <p className="itemdescription">{name.toLowerCase()}</p>
    </li>
  )
}

export default DestinationItem
