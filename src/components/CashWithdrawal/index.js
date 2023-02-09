// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onClickDenominationItem = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Willians'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">Sarah Willians</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="rupees">
              {cash}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                onClickDenominationItem={this.onClickDenominationItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
