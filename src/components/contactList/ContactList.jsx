import React from 'react';
import { ContactListItem } from 'components/contactListItem/ContactListItem';

export const ContactList = ({ filtredContacts, onDeleteContact }) => (
  <ul>
    {filtredContacts.map(contact => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);



