Intro to React
=============================

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

## Notes

Imperative 
 - talking through every single step
 - ie asking for a sandwich (which type of bread, exactly how long to toast it for, how thin to slice the ham)

Declarative 
 - gimme a sandwich (ham & cheese please)









### Declarative vs Imperative Programming








#### Imperative
```js
const header = document.createElement('h1')
header.innerText = 'Wassup yall'
header.class = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

#### Declarative
```js

function addHeader(){
    const header = document.createElement('h1')
    header.innerText = 'Wassup yall'
    header.class = "screaming"
    
    const container = document.querySelector('#container')
    container.append(header)
}

addHeader()

```


### Abstractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```

Second form: *Dynamic, reusable components using regular functions and arguments*


Third Form: *Static components using JSX*


FINAL FORM: *Dynamic, reusable components using JSX and props*


## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)



### Parking Lot 
- pely
- curator / paintings app 
- stresspace 
- spotify 

### Ideas

TLDR; Caryn picks after wireframing

- The SilkMeme (where you go to get alllll your memes) (black market memes) ==> 7
- LessSeam (you make food & drop it off at peoples houses)  ===> 7


- Reverse Alexandria (only books that have been banned in countries) Goodreads for banned books

### Review Questions
- What is Babel and what does it do for us in the context of React?
- Describe imperative and declarative coding paradigms. 
- Describe props in your own words. 
- What are key differences between writing HTML and writing JSX? 
- Break down a website (yelp, reddit, etc) in terms of what components exist. Which components are re-used? 