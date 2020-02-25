React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [x] Code Organization/file structure 
        - Folders: Components & Containers, or organized by resource
  - [x] Presentational vs Container components

- Optimizations:
  - [x] Functional vs Class Components (required for state & lifecycle methods)
  - [x] Fragments

- JS tricks/bugs often seen in React:
  - [x] constructor vs. ES6 instance variables
          - constructor(){ super(); this.state = {} }
          - state = {}
  - [x] Arrow functions returning objects 
          - () => ({ })
          - () => <MyComponent />
  - [x] Destructuring 
          - const { stocks, filter, search } = this.state;
          - this.state.stocks
          - this.state.filter
          - this.state.search 
  - [x] Spread (w/ prepend and append) 
          - this.state.stocks = [{id: 1, name: 'google'}, {id: 2, name: 'fb'}]
          - const myNewStock = {id:3, name:'flatiron school'}
          - let newStocksArr = [...this.state.stocks, myNewStock]
  - [x] Objects with the same key/value name --> Key Value Assignment
          - const firstName = 'caryn', lastName = 'mccarthy'
          - const myPerson = { firstName, lastName }
  - [x] dynamic keys 
          - { [variable]: "as_key" } 
          - { [event.target.name]: event.target.value }

- Best Practices:
  - [x] "then" callback for setState
  - [x] Don't use Force Update! 
  - [x] Functional setState
  - [x] Callbacks (avoid useless wrapping)
  - [x] Reusable components and callback function props (ex in Stocks)

- Additional Tidbits
    - [ ] Higher Order Components (HOCs)!
    - [ ] Hooks
    - [ ] Styled Components!

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)
[Hooks](https://reactjs.org/docs/hooks-intro.html)
[Styled Components](https://medium.com/styled-components/how-styled-components-works-618a69970421)

## Lecture Notes
destructuring arrays
  - const [firstArg, secondArg] = ['caryn', 'gemini', 'cause i can']
  - with Hooks


---- Updating single key in object in state 
```
state = {
  pizza: [],
  editingPizza: {
    topping: '',
    size: 'large'
  }
}
// this.setState({ editPizza: {...this.state.editPizza, topping: e.target.value} })

```

- Another example of when you need function setState
  - optimistic and then pessimistic updating? 
  - setting score based on multiple events in a game 