import styled from 'styled-components';


interface IStyleProps {

};


export const LoadingWrapper = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px 0;
  text-align: left;
  
  .ant-spin {
    margin-left: 20px;
  }
`;