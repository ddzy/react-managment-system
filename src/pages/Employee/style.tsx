import styled from 'styled-components';


export interface IStyleProps {};


export const EmployeeContainer = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px;
`;


//// 员工表格展示容器
export const ShowWrapper = styled<IStyleProps, 'div'>('div')`
  
`;



//// 员工详情 - 模态框
export const DisplayModalWrapper = styled<IStyleProps, 'div'>('div')`
`;

export const DisplayModalList = styled<IStyleProps, 'ul'>('ul')`

`;

export const DisplayModalListItem = styled<IStyleProps, 'li'>('li')`
  margin-top: 10px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  border-radius: 6px;
  line-height: 25px;
  text-align: left;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ItemLabel = styled<IStyleProps, 'div'>('div')`
  height: 100%;
`;

export const ItemContent = styled<IStyleProps, 'div'>('div')`
  height: 100%;
  color: #999;
`;