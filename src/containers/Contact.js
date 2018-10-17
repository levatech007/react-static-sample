import React, { Component } from 'react'
import Alert from '../components/Alert'

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
        name: "",
        phone: "",
        email: "",
        message: "",
        alert: false,
        submitted: false,
        alertStyle: "",
        alertMessages: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.validateFormFields = this.validateFormFields.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  validateFormFields() {
    let alertMessages = []
    let formIsValid = true

    if (this.state.name.length < 3) {
      formIsValid = false
      alertMessages.push("Name must exceed 2 symbols")
    }

    const validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validEmailPattern.test(this.state.email)) {
      formIsValid = false
      alertMessages.push("Email is not valid")
    }

    if (this.state.message.length < 10) {
      formIsValid = false
      alertMessages.push("Message must exceed 10 symbols")
    }

    this.setState({
      alertMessages: alertMessages
    })

    return formIsValid
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (this.validateFormFields()) {
      console.log("Form is valid")
      this.setState({
        alert: true,
        alertStyle: "alert alert-success",
        alertMessages: ["Thank you! Your request has been submitted!"]
      })
    } else {
      console.log("Form is not valid")
      this.setState({
        alert: true,
        alertStyle: "alert alert-danger",
      })
    }
    // this.setState({
    //     name: "",
    //     phone: "",
    //     email: "",
    //     message: "",
    //     alert: true,
    //     submitted: true
    // })
  }

  render() {
    return(
      <div>
        <div className="row justify-content-center">
          <h1>Contact</h1>
        </div>
        { this.state.alert ? <Alert alertStyle={ this.state.alertStyle } alertMessages={ this.state.alertMessages }/> : null }
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <form onSubmit={ this.onFormSubmit } className="forms">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    required="required"
                    placeholder="Your name"
                    onChange={ this.handleInputChange }
                    value= { this.state.name }
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required="required"
                    placeholder="Your email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    required="required"
                    placeholder="Your phone number"
                    onChange={ this.handleInputChange }
                    value={ this.state.phone }
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Message <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your text here"
                    required="required"
                    onChange={this.handleInputChange}
                    value={ this.state.message }
                    >
                    </textarea>
                </div>
              </div>
              <div className="row justify-content-center submit-btn">
                <div className="col-md-8 offset-md-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send your message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm;
