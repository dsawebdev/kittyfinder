import React, { Component } from 'react'
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component {
  constructor () {
    super()
    this.state = {
      kitties: [],
      searchfield: ''
    } 
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ kitties: users}))
    }, 2000)
    
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { kitties, searchfield } = this.state
    const filteredKitties = kitties.filter(kitty => {
      return kitty.name
      .toLowerCase()
      .includes(searchfield.toLowerCase())
    })
      return !kitties.length ? 
      <h1 className='tc mt7 f1'>Loading</h1> : 
      (
      <div className='tc'>
        <h1 className='f1'>Kitty Finder</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <hr />
        <Scroll>
        <CardList kitties={ filteredKitties }/>
        </Scroll>
      </div>
      )
    }
  }

export default App