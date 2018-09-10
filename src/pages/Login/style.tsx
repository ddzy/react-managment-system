import styled from 'styled-components';


/**
 * 登录 容器
 */
interface ILoginStyleProps {
  bgImgUrl?: string;
};


export const LoginContainer = styled<ILoginStyleProps, 'div'>('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  background-image: url(${(props) => props.bgImgUrl});
  background-size: cover;
`;

export const FormWrapper = styled<ILoginStyleProps, 'div'>('div')`
  min-width: 350px;
  padding: 0 20px;
  text-align: left;

  input {
    background-color: rgba(45,45,45,.15);
    color: #fff;
  }
`;

export const FormTitle = styled<ILoginStyleProps, 'h1'>('h1')`
  font-size: 30px;
  color: #fff;
  text-align: center;
`;

export const FormFriendLink = styled<ILoginStyleProps, 'p'>('p')`
  text-align: center;
`;