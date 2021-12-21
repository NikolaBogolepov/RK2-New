import React from 'react'
import Store from './store'
import './App.css'
class app extends React.Component {


  constructor() {
    super()
      this.state ={
        out: '0'
      }
      this.refOutput = React.createRef()
  }


  tapeNumber(value){
      let currentValue = value
      let output = this.refOutput.current

      this.setState({
          out: currentValue
      })
      if (output.value === '0') {output.value = ''}
      output.value += currentValue
  }

  tapeOperation(value){
      let output = this.refOutput.current
      if (value === 'C') {output.value = '0'}
      else if (value === '=') {output.value=eval(output.value)}
  }

  render(store) {
    return(
        <div className="container">

          <div className="output">
            <input ref={this.refOutput} type="text" defaultValue={this.state.out}/>
          </div>

          <div className="buttons">
              {Store.buttons.map(item => <button
              onClick={() => {this.tapeNumber(item.val)}}
              >{item.val}</button>)}
              {Store.operations.map(item => <button
                  onClick={() => {this.tapeOperation(item.val)}}
              >{item.val}</button>)}
          </div>

        </div>
    )
  }
}

export default app
