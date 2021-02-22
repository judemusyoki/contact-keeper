import React, { useReducer } from 'react';
import { uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jude Musyoki',
        email: 'jude@jeanette.com',
        phone: '222-22-22-2',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Preben Jensen',
        email: 'preben@jeanette.com',
        phone: '333-444-44',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Lene Jensen',
        email: 'lene@jeanette.com',
        phone: '555-55-33',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Actions
  // Add contact
  // Delete contact
  // Set current contact
  // Clear current contact
  // Update current contact
  // Filter contacts
  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
