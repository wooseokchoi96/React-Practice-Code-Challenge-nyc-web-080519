import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis : [],
    counter : 0,
    budget : 100
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArray => {
      this.setState({ sushis : this.addIsEatenAttr(sushisArray)})
    });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.firstFourSushis()} moreSushi={this.moreSushi} changeEaten={this.changeIsEatenAttr}/>
        <Table emptyPlates={this.emptyPlates()} budget={this.state.budget}/>
      </div>
    );
  }

  // set isEaten to false for every sushi in the beginning
  addIsEatenAttr = (sushisArray) => {
    return sushisArray.map(sushiObj => ({...sushiObj, isEaten : false}) );
  }

  // only send four sushi to SushiContainer at any given time
  firstFourSushis = () => {
    return this.state.sushis.slice(this.state.counter, this.state.counter + 4);
  }

  // change isEaten ==> true
  changeIsEatenAttr = (sushiArg) => {
    let newSushis = [...this.state.sushis] ;
    let foundSushi = newSushis.find(sushi => sushi.id === sushiArg.id) ;
    let newBudget = this.state.budget - foundSushi.price ;
    if ( newBudget >= 0 && !foundSushi.isEaten){
      foundSushi.isEaten =  true;
      this.setState({ 
        sushis : newSushis,
        budget : newBudget
        })
    }
  }

  // load next four sushi
  moreSushi = () => {
    let newCounter = this.state.counter + 4 ;
    this.setState({ counter : newCounter })
  }

  // array of eaten sushi
  emptyPlates = () => {
    return this.state.sushis.filter(sushi => sushi.isEaten);
  }


}

export default App;