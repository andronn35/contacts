let DELETE_CONTACT = "DELETE_CONTACT"
let ADD_CONTACT = "ADD_CONTACT"
let CHANGE_VALUE = "CHANGE_VALUE"

const initialState = {
  contacts: [
    {
      "id": 1,
      "name": "Ivan",
      "phone": "+7 (999) 444-43-44",
      "city": "Moscow"
    },
    {
      "id": 2,
      "name": "Petr",      
      "phone": "+7 (888) 122-12-12",   
      "city": "London"   
    },
    {
      "id": 3,
      "name": "Andrey",
      "phone": "+7 (444) 111-45-45",
      "city": "Vologda"
    }
  ]
}

const contactsReducer = (state = initialState, action) => {
  switch(action.type){
    case DELETE_CONTACT: 
      return funcDeleteContact(state, action.id)
    case CHANGE_VALUE:
      return funcChangeValue(state, action.id, action.value, action.name)
    case ADD_CONTACT:
      let newState = JSON.parse(JSON.stringify(state))
      newState.contacts.push(action.newContact)
      return newState    

    default: return state;
    }
}

export const deleteContact = (id) => ({ type: DELETE_CONTACT, id });
export const addContact = (newContact) => ({ type: ADD_CONTACT, newContact });
export const changeValue = (id, value, name) => ({ type: CHANGE_VALUE, id, value, name });

function funcDeleteContact(state, id) {
  const newContacts = state.contacts.filter(item => item.id !== id)
  return {...state, contacts: newContacts}
}

function funcChangeValue(state, id, newValue, name) {
  const newContacts = state.contacts.map(item => {
    if(item.id === id) { return {...item, [name]: newValue} }
    return item
  })
  return {...state, contacts: newContacts}  
}

export default contactsReducer;