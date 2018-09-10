import styled from 'styled-components'; 


interface IStyleProps {

};


export const CallapseWrapper = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px 0;
  text-align: left;
  button {
    margin-left: 10px;
  }
`;