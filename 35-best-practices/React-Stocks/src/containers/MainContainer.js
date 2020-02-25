import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => {
        this.setState({ stocks }, 
          () => { console.log('after state has been updated', this.state)})
      })
  }

  addStock = (id) => {
    let newStocks = this.state.stocks.map(stock => {
      if(stock.id === id){
        stock.inPortfolio = true
      }
      return stock
    })
    this.setState({ stocks: newStocks })
  }

  removeStock = (id) => {
    let newStocks = this.state.stocks.map(stock => {
      if(stock.id === id){
        stock.inPortfolio = false
      }
      return stock
    })
    this.setState({ stocks: newStocks })
  }

  render() {
    let portfolioStocks = this.state.stocks.filter(stock => stock.inPortfolio)
    return (
      <Fragment>
        <SearchBar/>
        <div className="row">
          <div className="col-8">

            <StockContainer 
              stocks={this.state.stocks}
              addStock={this.addStock}/>

          </div>
          <div className="col-4">

            <PortfolioContainer 
              stocks={portfolioStocks}
              removeStock={this.removeStock}/>

          </div>
        </div>
      </Fragment>
    );
  }

}

export default MainContainer;
