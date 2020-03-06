import { sushis } from './sushis';
// Endpoint!
const API = "http://localhost:3000/sushis"


export const nextPageCreator = () => ( {type: 'NEXT_PAGE'} )
export const fetchSushiCreator = () => dispatch => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        setTimeout(() => dispatch({type: 'FETCH_SUSHI', payload: data}), 2000)
        
    })
} 

// THUNK TL;DR ===> lets action creators return functions instead of objects. those funcs can use dispatch 


// export const fetchSushiCreator = () => { 
//     return fetch(API)
//         .then(res => res.json())
//         .then(data => return {type: 'FETCH_SUSHI', payload: data})
// }
export const eatSushiCreator = (payload) => ( {type: 'EAT_SUSHI', payload } )
export const addToWalletCreator = () => ( {type: 'ADD_TO_WALLET'} )