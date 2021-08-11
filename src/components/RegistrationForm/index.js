import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    firstName: '',
    lastName: '',
    errFirstName: false,
    errLastName: false,
  }

  newForm = () => {
    this.setState({
      isSubmitted: false,
      firstName: '',
      lastName: '',
      errFirstName: false,
      errLastName: false,
    })
  }

  submitForm = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    }
    if (firstName === '') {
      this.setState({errFirstName: true})
    }
    if (lastName === '') {
      this.setState({errLastName: true})
    }
  }

  checkFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstName: '', errFirstName: true})
    } else {
      this.setState({firstName: event.target.value, errFirstName: false})
    }
  }

  checkLastName = event => {
    if (event.target.value === '') {
      this.setState({lastName: '', errLastName: true})
    } else {
      this.setState({lastName: event.target.value, errLastName: false})
    }
  }

  render() {
    const {
      isSubmitted,
      firstName,
      lastName,
      errFirstName,
      errLastName,
    } = this.state

    const errorFirstName = errFirstName ? 'error-input' : ''
    const errorLastName = errLastName ? 'error-input' : ''

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Registration</h1>
          <div className="registration-form">
            {!isSubmitted ? (
              <div className="form-container">
                <label className="label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  className={`input ${errorFirstName}`}
                  id="firstName"
                  placeholder="First Name"
                  onBlur={this.checkFirstName}
                />
                {errorFirstName && <p className="error">*Required</p>}
                <label className="label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  className={`input ${errorLastName}`}
                  id="lastName"
                  placeholder="Last Name"
                  onBlur={this.checkLastName}
                />
                {errorLastName && <p className="error">*Required</p>}
                <button
                  className="button"
                  type="submit"
                  onClick={this.submitForm}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="submitted-form">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  alt="success"
                  className="image"
                />
                <p className="desc">Submitted Successfully</p>
                <button className="button" type="button" onClick={this.newForm}>
                  Submit Another Response
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
