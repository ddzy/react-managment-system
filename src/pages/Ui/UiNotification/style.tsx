import styled from 'styled-components';


interface IStyleProps {

};


export const NotificationWrapper = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px 0;
  text-align: left;
  
  .ant-spin {
    margin-left: 20px;
  }

  button {
    margin-left: 15px;
  }
`;