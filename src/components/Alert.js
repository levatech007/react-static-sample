import React, {Component} from 'react'

class Alert extends Component {
  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-8">
          <div className={ this.props.alertStyle } role="alert">
            <ul>
              { this.props.alertMessages.map((message, idx) => {
                return(<li key={ idx }>{ message }</li>)
              })
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Alert
