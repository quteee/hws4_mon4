import React from 'react'
import './index.css'

export default class NumberForm extends React.Component {
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
        console.log('Your Number:' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
          <form className='NumForm' onSubmit={this.handleSubmit}>
            <label>
              Numb:
              <input
                type="number" placeholder='+996 555 55-55-55'
                value={this.state.value}
                onChange={this.handleChange}/>
            </label>
            <input className='container' type="Submit" value='send' />
          </form>
        )
    }
}