import styled from 'styled-components';


export interface IStyleProps {};


/**
 * 权限设置容器
 */
export const PermissionContainer = styled<IStyleProps, 'div'>('div')`
  padding: 20px 60px;
  text-align: left;
`;


/**
 * 权限设置 -> 权限列表展示容器
 */
export const PermissionDisplayWrapper = styled<IStyleProps, 'div'>('div')`
  
`;


/**
 * 权限设置 -> 管理者授权容器
 */
export const PermissionAuthorizedWrapper = styled<IStyleProps, 'div'>('div')`

`;


/**
 * 权限设置 -> 管理者添加&编辑容器
 */
export const PermissionControlWrapper = styled<IStyleProps, 'div'>('div')`

`;