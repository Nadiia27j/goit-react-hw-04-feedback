import styled from '@emotion/styled';

export const BoxButton = styled.div`
   display: flex;
   margin-left: 40px;
`;

export const ButtonItem = styled.li`
 list-style: none;
  &:not(:last-child) {
    margin-right: 10px;
  } 
`;

export const Button = styled.button`
  padding: 5px;
  
  &:hover {
    background-color: grey;
    border: 2px gray solid;
    border-radius: 2px;
  }
  
`;