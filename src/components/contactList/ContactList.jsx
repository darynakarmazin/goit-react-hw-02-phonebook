import React from 'react';
import { ContactListItem } from 'components/contactListItem/ContactListItem';

export const ContactList = ({ filtredContacts }) => (
  <ul>
    {filtredContacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
      />
    ))}
  </ul>
);



