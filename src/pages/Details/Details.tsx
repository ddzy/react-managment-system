import * as React from 'react';
import { match } from 'react-router';

import {
  DetailsWrapper,
} from './style';



export interface IDetailsProps {
  match: match<any>;
};
interface IDetailsState {};


/**
 * 订单详情页
 */
class Details extends React.PureComponent<
  IDetailsProps,
  IDetailsState
> {

  public readonly state = {}


  public render(): JSX.Element {
    return (
      <DetailsWrapper>
        {this.props.match.params.id}
      </DetailsWrapper>
    );
  }

}


export default Details as React.ComponentClass;