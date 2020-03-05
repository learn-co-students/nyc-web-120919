
let initialState = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
}

let reducer = (prevState = initialState, action) => {
    console.log('in reducer', action.type)
    switch (action.type) {
        case 'LIKE':
            return { ...prevState, likes: prevState.likes + 1 }
        case 'DISLIKE':
            return { ...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE':
            return { ...prevState, darkMode: !prevState.darkMode }
        case 'CHANGETEXT':
            return { ...prevState, text: action.payload.value } // action.payload
        case 'ADDTEXT':
            return { ...prevState, text: '', thangs: [prevState.text, ...prevState.thangs] }
        default:
            return prevState
    }
}

export default reducer ;