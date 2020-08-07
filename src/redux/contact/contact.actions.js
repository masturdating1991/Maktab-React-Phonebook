import types from './contact.type'

export const addContact = (contact) => {
    return {
        type: types.ADD_CONTACT,
        payload: contact
    }
}
export const deleteContact = (id) => {
    return {
        type: types.DELETE_CONTACT,
        payload: id
    }
}
export const updateContact = (contact) => {
    return {
        type: types.UPDATE_CONTACT,
        payload: contact
    }
}


export const setSearch = (searchInput) => {
    return {
        type: types.SET_SEARCH,
        payload: searchInput
    }
}