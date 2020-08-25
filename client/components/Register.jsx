import React from 'react'
import { connect } from 'react-redux'
import { register } from '../actions';

class Register extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        username: '',
        password: '',
      }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit(event) {
      event.preventDefault()
      this.props.dispatch(register(this.state.username, this.state.password))
        .then(this.setState({ username: '', password: '' }))
    }
  
    render() {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label style={{ display: 'block' }}>Username:
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
            </label>
            <label style={{ display: 'block' }}>Password:
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
            </label>
            <input type="submit" value="Register" />
          </form>
        </>
      )
    }
  }
  
  function mapReduxStateToProps(reduxState) {
    return {
    }
  }

  export default connect(mapReduxStateToProps)(Register)
