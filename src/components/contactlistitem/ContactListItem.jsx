import styled from 'styled-components';

const ButtonDel = styled.button`
  border: 2px dotted red;
  font-weight: 900;
  color: red;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
`;

const ContactListItem = ({ contact:{name, number}, onDelete }) => (
  <li>
    <ButtonDel title = {`remove ` + name + ` contact` } onClick={onDelete}>&#xD7;</ButtonDel>
    {name}: {number}
  </li>
);

export default ContactListItem;