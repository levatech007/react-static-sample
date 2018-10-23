import React, { Component } from 'react'
import { withSiteData } from 'react-static'

// export default withSiteData(() => (
//   <div className="jumbotron">
//   <div className="container">
//     <h1 className="display-2">Hello World</h1>
//     <hr></hr>
//     <p className="lead">This is my first time using React-Static</p>
//     <p className="lead">This is also my first time processing a contact form from a static React app</p>
//     <p className="lead">To do that, I am using Mailgun and EmailJS</p>
//   </div>
// </div>
// ))
class Home extends Component {
  constructor() {
    super();
    this.state = {
      hero1: "",
    }
  }

  componentDidMount() {
    const url = `${ process.env.ELEGANT_CMS_URL }`
    console.log(url)
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "default",
      credentials: 'include',
      headers: {
        "Authorization": `Token token=${ process.env.ELEGANT_CMS_TOKEN }`
      },
    }).then((resp) => {
      console.log(resp)
    }, (error) => {
      console.log(error) //=> String
    })
  }

  render() {
    return(
      <div className="jumbotron">
      <div className="container">
        <h1 className="display-2">Hello World</h1>
        <hr></hr>
        <p className="lead">{ this.state.hero1 }</p>
        <p className="lead">This is also my first time processing a contact form from a static React app</p>
        <p className="lead">To do that, I am using Mailgun and EmailJS</p>
      </div>
    </div>
    )
  }
}
export default withSiteData(Home)
