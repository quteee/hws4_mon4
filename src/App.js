import React from 'react'
import './index.css'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ""}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    console.log('Your Name:' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
          <form className='NameForm' onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                  type="text" placeholder='Anton Pavlovich'
                  value={this.state.value}
                  onChange={this.handleChange}
              />
            </label>
            <input className='container' type="Submit" value='send'/>
          </form>
    )
  }
}
