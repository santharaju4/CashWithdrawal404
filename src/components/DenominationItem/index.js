// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onClickDenominationItem} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    onClickDenominationItem(value)
  }

  return (
    <li className="list-value">
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
