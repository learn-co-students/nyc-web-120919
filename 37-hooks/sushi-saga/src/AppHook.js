import React, { Component, useState, useEffect } from 'react';
// import SushiContainer from './containers/SushiContainer';
import SushiContainerHook from './containers/SushiContainerHook';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const AppHook = () => {
  const [showSushi, setShowSushis] = useState(true)
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [budget, setBudget] = useState(105)

  useEffect(() => {
      fetch(API)
      .then(res => res.json())
      .then(data => {
        setSushis(data)
      })
  }, []) // ICEBOX sushis here keeps running over and over again 
    

  const eatSushi = (id, price, eaten ) => {
    if(price <= budget && !eaten){ 
      let newSushis = sushis.map(sushi => { 
        if(sushi.id === id){ 
          sushi.eaten = true
        }
        return sushi 
      })

      setSushis(newSushis)
      setEatenSushis([...eatenSushis, id])
      setBudget(budget - price )
    }
  }

  return (
    <div className="app">
      <button onClick={() => setShowSushis(!showSushi)}>Click me! </button>
      {showSushi && <SushiContainerHook sushis={sushis} eatSushi={eatSushi} />}
      <Table eatenSushis={eatenSushis} budget={budget} />
    </div>
  );
}

export default AppHook;