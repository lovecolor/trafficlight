// eslint-disable-next-line
import logo from './logo.svg';
import './App.scss';
import TrafficLight from './components/TrafficLight'
import React, { Component } from 'react'




const RED=0
const YELLOW=1
const GREEN=2
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      color:RED
    }
    setInterval(() => {
      this.setState({
        color:this.getNextColor(this.state.color)
      })
    }, 3000);
  }
  getNextColor=(color)=>{
    return (color+1)%3
  }
  render() {
    const {color}=this.state
    return (
      <div className='App'>
        <TrafficLight color={color}></TrafficLight>
      </div>
    )
  }
}



