
export const likeActionCreator = () => ({type: 'LIKE'});
export const dislikeActionCreator = () => ({type: 'DISLIKE'});
export const toggleActionCreator = () => ({type: 'TOGGLE'});
export const addTextActionCreator = () => ({type: 'ADDTEXT'});
export const changeTextCreator = (newText) => {
    console.log('inside creator',newText)
    return { type: 'CHANGETEXT', payload: { value: newText } }
}

// export { 
//     likeActionCreator, 
//     dislikeActionCreator, 
//     toggleActionCreator  };