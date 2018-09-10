import styled from 'styled-components';


export interface INavLogoDivProps {
  logoUrl: string;
};


export const NavLogoDiv = styled<INavLogoDivProps, 'div'>('div')`
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props: INavLogoDivProps) => props.logoUrl});
  background-size: cover;
  background-position-y: -22px;
`;