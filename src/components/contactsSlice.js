import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
            { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
            { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
            { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
        ], filter: '' },
    reducers: {
        addContact: (state, action) => {
            const doesExist = state.contacts.some(
                contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
            );
            if (!doesExist) {
                state.contacts.push(action.payload);
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;