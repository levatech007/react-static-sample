import React, { Component } from "react"

class ContactForm extends Component {
  constructor(){
    super();
    this.state = {
      message: {
        name: "",
        phone: 0,
        email: "",
        comment: "",
        alert: false,
        submitted: false
      }
    }

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onCommentInputChange = this.onCommentInputChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
  }

  onNameInputChange(e) {
    this.setState({
      message: {
        name: e.target.value,
        phone: this.state.message.phone,
        email: this.state.message.email,
        comment: this.state.message.comment,
      }
    })
  }

  onPhoneInputChange(e) {
    this.setState({
      message: {
        name: this.state.message.name,
        phone: e.target.value,
        email: this.state.message.email,
        comment: this.state.message.comment,
      }
    })
  }

  onEmailInputChange(e) {
    this.setState({
      message: {
        name:this.state.message.name,
        phone: this.state.message.phone,
        email: e.target.value,
        comment: this.state.message.comment,
      }
    })
  }

  onCommentInputChange(e) {
    this.setState({
      message: {
        name:this.state.message.name,
        phone: this.state.message.phone,
        email: this.state.message.email,
        comment: e.target.value
      }
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    let message = this.state.message
    console.log(message)
    this.setState({
      message: {
        name: "",
        phone: 0,
        email: "",
        comment: "",
        alert: true,
        submitted: true
      }
    })
  }

  render() {
    return(
      <div>
        <div className="row justify-content-center">
          <h1>Contact</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <form onSubmit={ this.onFormSubmit } className="forms">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    onChange={this.onNameInputChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    onChange={this.onEmailInputChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Your phone number"
                    onChange={this.onPhoneInputChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Comment <span className="red-text">*</span></label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your text here"
                    onChange={this.onCommentInputChange}
                    >
                    </textarea>
                </div>
              </div>
              <div className="row justify-content-center submit-btn">
                <div className="col-md-8 offset-md-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit your request"
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
