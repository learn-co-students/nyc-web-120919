import { sushis } from './sushis';

const initialState = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    startIndex: 0
}

const reducer = (prevState=initialState, action) => {
    console.log('inside reducer', action)
    switch(action.type){
        case 'NEXT_PAGE':
            let nextIndex = prevState.startIndex + 4 
            if( nextIndex >= prevState.sushis.length ){ nextIndex = 0 } // this is for the page wrap around 
            return {...prevState, startIndex: nextIndex}
        case 'EAT_SUSHI':
            return eatSushiHelper(action.payload, prevState) 
        case 'FETCH_SUSHI':
            return {...prevState, sushis: action.payload }
        case 'ADD_TO_WALLET':
            return {...prevState}
        default:
            return prevState
    }
}

/** IN FOLLOWERREDUCER.JS */
// const initialFollowersState = {
//     followers: []
// }

// const followersReducer = (prevState)

// go TO INDEX.JS



const eatSushiHelper = (payload, prevState) => {
    // do the calculations
    // return the new version of state 
    const { id, price, eaten } = payload;

    if(price <= prevState.budget && !eaten){  
        let newSushis = prevState.sushis.map(sushi => {  
          if(sushi.id === id){  
            sushi.eaten = true  
          }
          return sushi  
        })
        return  { 
            ...prevState,
            sushis: newSushis,
            eatenSushis: [...prevState.eatenSushis, id],
            budget: prevState.budget - price
        }

    } else {
        return prevState
    }
}

export default reducer;