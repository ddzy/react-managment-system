import styled from 'styled-components';


interface IStyleProps {

};


export const LoginFormWrapper = styled<IStyleProps, 'div'>('div')`
  display: flex;
  justify-content: center;
  padding: 20px 60px 0;
  text-align: left;
  button {
    margin-left: 10px;
  }
`;

export const FormBox = styled<IStyleProps, 'div'>('div')`
  width: 400px;
  padding: 40px;
`;