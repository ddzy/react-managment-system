import styled from 'styled-components';


/**
 * 公共 footer 样式
 */
interface IFooterStyleProps {

};


export const FooterFriendLink = styled<IFooterStyleProps, 'div'>('div')`
  height: 80px;
  line-height: 80px;
  text-align: center;
`;

export const LinkContent = styled<IFooterStyleProps, 'div'>('div')`
  font-size: 16px;
`;

export const LinkContentSpan = styled<IFooterStyleProps, 'span'>('span')`
  display: inline-block;
  margin-right: 10px;
`;


export const LinkContentP = styled<IFooterStyleProps, 'a'>('a').attrs({
  href: 'https://github.com/ddzy',
})`
  display: inline-block;
`;
