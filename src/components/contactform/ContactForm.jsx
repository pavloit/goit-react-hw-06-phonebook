import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: flex;
  background-color: rgba(255, 222, 111, 0.26);
  flex-direction: column;
  border: 2px solid darkblue;
  border-radius: 10px;
  padding: 20px 30px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledName = styled.span`
color: darkblue;
font-weight: bold;
`;

const StyledNumber = styled.span`
margin-top: 10px;
color: darkblue;
font-weight: bold;
`;

const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  
`;

const InputName = styled.input`
    margin-top: 5px;
`;

const AddButton = styled.button`
    margin-top: 28px;
    width: 90px;
    height: 30px;
    background-color: deepskyblue;
    border-radius: 5px;
    border-style: none;
    transition: background-color 0.3s ease;

    &:hover, &:focus {
    background-color: #18c944;
    color: white;
    cursor: pointer;
}
`;

const ContactForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ id: nanoid(), name, number });
    setName('');
    setNumber('');
    };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    let input = event.target.value
    .replace(/\D/g, "").slice(0, 8)
    .replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3"); 
    setNumber(input);
  }

      return (
        <FormContainer onSubmit={handleSubmit}>
          <LabelName>
            <StyledName>Name:</StyledName>
            <InputName
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Name"
            />
          </LabelName>
          <LabelName>
            <StyledNumber>Number:</StyledNumber>
            <InputName
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="123-45-67"
              value={number}
              onChange={handleNumberChange}
              required
            />
          </LabelName>
          <AddButton type="submit">Add contact</AddButton>
        </FormContainer>
      );
    }
  
  export default ContactForm;