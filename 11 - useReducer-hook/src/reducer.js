import { data } from './data'
import { CLEAR_ALL_ITEMS, RESET_LIST, REMOVE_ITEM } from './action'

const reducer = (state, action) => {
  if (action.type === CLEAR_ALL_ITEMS) {
    // console.log(action)
    return { ...state, people: [] }
  }
  if (action.type === RESET_LIST) {
    // console.log(action)
    return { ...state, people: data }
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )
    return { ...state, people: newPeople }
    // console.log(action)
  }
  //   return state
  throw new Error(`No matching "${action.type}" - action type`)
}

export default reducer
