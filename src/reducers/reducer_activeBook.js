// state argument is not an aplication state, only the state
// this reducer is responsible for;
export default (state = null, action) => {

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }

  // return state;
}