import styled from 'styled-components';



interface IStyleProps {

};


export const HomeContainer = styled<IStyleProps, 'div'>('div')`
  display: flex;
  justify-content: center;
  height: 100%;  
  padding-top: 100px;
`;

export const CardTitle = styled<IStyleProps, 'h2'>('h2')`
  color: #777;
  font-size: 14px;
`;

export const CardContent = styled<IStyleProps, 'div'>('div')`
  
`;