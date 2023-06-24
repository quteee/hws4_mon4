import React from 'react'
import './index.css'

export default class EmailForm extends React.Component {
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
        console.log('Your Email:' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <form className='EmailForm' onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text" placeholder='user1488@gmail.com'
                        value={this.state.value}
                        onChange={this.handleChange}/>
                </label>
                <input className='container' type="Submit" value='send'/>
            </form>
        )
    }
}