
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => {}

class Profile extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number
  }

  static defaultProps = {
    name: "Ninja PRO",
    onHello: noop
  }

  saluda = () => {
    this.props.onHello()
  }

  render(){

    const { name, bio, email } = this.props

    return(
      <div>
        <h1>{ name }</h1>
        <p>
          { bio }
        </p>
        <a href={`mailto:${ email }`}>
          { email }
        </a>
        <button onClick={ this.saluda }>
          Saluda
        </button>
      </div>
    )
  }
}

Profile.defaultProps = { }

class App extends Component {

  render(){
    return(
      <div>
        <Profile
          bio="Soy un desarrollador FullStack"
          email="my-email@mail.com"
        />
      </div>
    )
  }
}

export default App