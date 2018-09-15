import * as React from 'react';

import {
  BikeMapContainer,
} from './style';


export interface IBikeMapProps {};
interface IBikeMapState {};


//// 分布地图页
class BikeMap extends React.PureComponent<
  IBikeMapProps,
  IBikeMapState
> {

  public readonly state = {}


  public render(): JSX.Element {
    return (
      <BikeMapContainer>
        分布地图
      </BikeMapContainer>
    );
  }

}


export default BikeMap;