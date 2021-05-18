
import React, { Component, Fragment } from 'react'

const Computacion = () => (
  <>
    <li>Monitor</li>
    <li>Mouse</li>
    <li>Teclado</li>
  </>
)

const Ropa = () => (
  <>
    <li>Playera</li>
    <li>Jeans</li>
    <li>Shorts</li>
  </>
)

class App extends Component {

  render(){
    return(
      <div>
        <Computacion />
        <Ropa />
      </div>
    )
  }
}

export default App