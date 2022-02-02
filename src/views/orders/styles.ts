import styled from 'styled-components';

export const FormWrapper = styled.div`
  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  /* flex: 1 0 auto; */
  font-family: 'Heebo',sans-serif;
`;

export const FormTitle  = styled.div`
  font-size: 1.8rem;
  color: var(--black);
`;

export const InputRow  = styled.div`
  display: block;
  width: 100%;
  margin: 1rem 0;
`;

export const Label  = styled.label`
  display: block;
  font-size: 1.4rem;
  padding: 1rem 0 .5rem;
`;

export const Input  = styled.input`
  border: 1px solid var(--light-pink);
  box-sizing: border-box;
  color: #202020;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem;
`;

export const Submit = styled.button`
  cursor: pointer;
  font-family: 'Heebo', sans-serif;
  display: block;
  color: #2d3748;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  display: inline-block;
  font-size: 16px;
  letter-spacing: 1.2px;
  margin: 2rem 0;

  background-color: var(--light-pink);
  
  border: 2px solid var(--light-pink);
  color: var(--white);

  &:hover {
    background-color: var(--white);
    border-color: var(--light-pink);
    color: var(--light-pink);
  }
`;