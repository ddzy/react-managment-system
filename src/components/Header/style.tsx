import styled from 'styled-components';


/**
 * 头部 头像栏
 */
interface IAdminStyleProps {

};

/**
 * 头部 头像框&主题
 */
export const AdminInfoContainer = styled<IAdminStyleProps, 'div'>('div')`
  position: relative;
  height: 64px;
  border-bottom: 1px solid #ccc;
`;

export const AdminInfo = styled<IAdminStyleProps, 'div'>('div')`
  position: absolute;
  right: 120px;
  color: #87d068;
`;

export const AdminChangeTheme = styled<IAdminStyleProps, 'div'>('div')`
  position: absolute;
  right: 40px;
`;


/**
 * 头部 天气栏
 */
export const BreadcrumbContainer = styled<IAdminStyleProps, 'div'>('div')`
  position: relative;
  height: 40px;
  line-height: 40px;
  color: #666;
`;

export const BreadcrumbTitle = styled<IAdminStyleProps, 'div'>('div')`
  position: absolute;
  left: 0;  
  min-width: 160px;
  height: 100%;
`;

export const BreadcrumbTitleText = styled<IAdminStyleProps, 'h1'>('h1')`
  color: #666;
  font-size: 20px;
  &:after {
    content: "";
    position: absolute;
    left: 66px;
    bottom: -9px;
    border-top: 9px solid #fff;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
  }
`;

export const BreadcrumbContent = styled<IAdminStyleProps, 'div'>('div')`
  position: absolute;
  right: 0;
  height: 100%;
`;

export const BreadcrumbWeatherList = styled<IAdminStyleProps, 'ul'>('ul')`
  font-size: 14px;
`;


export const BreadcrumbWeatherItem = styled<IAdminStyleProps, 'li'>('li')`
  float: left;
  margin-right: 15px;
  &:nth-of-type(3) {
    color: #faa755;
  }
`;

