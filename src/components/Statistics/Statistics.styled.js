import styled from '@emotion/styled';

export const List = styled.ul`
   list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
   }
`;