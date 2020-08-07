import types from './contact.type'
const initialState = {
    contacts_list: [],
    search: ''
}
const contactReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_CONTACT:
            return {
                ...state,
                contacts_list: [...state.contacts_list, payload]
            }
        case types.DELETE_CONTACT:
            return {
                ...state,
                contacts_list: state.contacts_list.filter(item => item.id !== payload)
            }
        case types.UPDATE_CONTACT:
            return {
                ...state,
                contacts_list: state.contacts_list.map(item => item.id === payload.id ? payload : item)
            }

        case types.SET_SEARCH:
            return {
                ...state,
                search: payload
            }
        default:
            return state
    }
}
export default contactReducer;
