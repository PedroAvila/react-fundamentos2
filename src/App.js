

import React, { Component } from 'react'

const Saludo = (props) => {

  return(
    <div>
      <div>
        { props.name && <strong>{ props.name }</strong>  }
      </div>
      { props.saluda
        ? (
          <h1>Hola, tu eres genial!</h1>
        )
        : (
          <p>
            Wops, no hay saludos para ti!
          </p>
        )
      }
    </div>
  )

  /* if (props.saluda) {
    return(
      <h1>Hola, tu eres genial</h1>
    )
  }
  return(
    <p>
      Wops, no hay saludos para ti!
    </p>
  ) */
}

const App = () => (
  <div>
    <Saludo saluda name="Ninja Pro" />
  </div>
)

export default App