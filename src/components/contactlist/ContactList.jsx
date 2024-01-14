import ContactListItem from '../contactlistitem/ContactListItem';
import styled from 'styled-components';

const ItemList = styled.ul`
 list-style: none;
 color: darkblue;
`;

const ContactList = ({ contacts, onDelete }) => (
    <ItemList>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ItemList>
  );

export default ContactList;