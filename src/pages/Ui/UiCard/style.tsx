import styled from 'styled-components';


interface IStyleProps {
  
};


export const CardWrapper = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px 0;
  text-align: left;
  button {
    margin-left: 10px;
  }
`;

export const LoadMoreWrapper = styled<IStyleProps, 'div'>('div')`
  display: flex;
  justify-content: center;

`;