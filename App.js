//import
import React , { Component } from 'react'

//constant
const someText = 'text,text,text'
const someText1 = 'text2,text2,text2'
const someText2 = 'text3,text3,text3'
const a = {
  first: '1',
  second: '2',
  third: '3'
}

//classes
class App extends Component {
  state = {
    activeTab: a.first
  }

  handleSubmit = (activeTab) => (e) =>{
    this.setState({activeTab})
  }

  render() {
    const { activeTab } = this.state
    return (
      <div className = { 'block' } >
        <button className={ activeTab  === a.first && 'tab active' } onClick={this.handleSubmit(a.first)} > 1 </button>
        <button className={ activeTab  === a.second && 'tab active' } onClick={this.handleSubmit(a.second)} > 2 </button>
        <button className={ activeTab  === a.third && 'tab active' }  onClick={this.handleSubmit(a.third)} > 3 </button>
        <div className={'background_big'}>
        {activeTab  === a.first && <div className={ 'tab' } >{ someText }</div>}
        {activeTab  === a.second && <div className={ 'tab' } >{ someText1 }</div>}
        {activeTab  === a.third && <div className={ 'tab' } >{ someText2 }</div>}
      </div>
      </div>
    )
  }
}

export default App;
