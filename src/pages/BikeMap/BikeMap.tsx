import * as React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
} from 'antd';
import { 
  Map, 
  Marker,
} from 'rc-bmap';

import {
  BikeMapContainer,
} from './style';
import { 
  IInitialState, 
  reduxHandleGetBikeMapInfo, 
} from './BikeMap.redux';



export interface IBikeMapProps {
  BikeMapPageReducer: IInitialState;

  reduxHandleGetBikeMapInfo: (
    callback?: () => void,
  ) => void;
};
interface IBikeMapState {};


//// 分布地图页
class BikeMap extends React.PureComponent<
  IBikeMapProps,
  IBikeMapState
> {

  public readonly state = {}


  public componentDidMount(): void {
    this.props.reduxHandleGetBikeMapInfo(() => {
      console.log(this.props.BikeMapPageReducer);
    });
  }


  /**
   * 处理 初始化地理定位控件
   */
  public hanldeInitGeolocation = (): object => {
    const offset = {
      width: 10,
      height: 10,
    } as object;
    const locationIcon = {
      url: "http://www.uimaker.com/uploads/allimg/20160913/1473728274454673.jpg",
      size: { width: '100px', height: '100px' }
    } as object;
    const events = {
      locationSuccess: (event: any) => {
        console.log("locationSuccess", event);
      },
      locationError: (event: any) => {
        console.log("locationError", event);
      }
    } as object;
    
    return {
      offset,
      locationIcon,
      events,
      showAddressBar: true,
      autoLocation: true,
    };
  }


  /**
   * 处理 初始化多边形控件
   */
  public handleInitPolygon = () => {
    console.log(222);
  }


  public render(): JSX.Element {
    return (
      <BikeMapContainer
        id="bmap-container"
      >
        <Card
          title="百度地图"
        >
          <Map
            ak='Q5fHsUOw4zVTuIu8vqfzQVBf52drLWuo'
            center={{
              lat: 23.03509484,
              lng: 113.13402564,
            }}
            zoom={14}
            mapStyle={{
              style: 'light',
            }}
          >
            <Marker 
              point={{
                lat: 23.03509484,
                lng: 113.13402564,
              }}
              icon={{
                url: './assets/bike.jpg',
                size: {
                  width: 106,
                  height: 125,
                },
              }}
            />
          </Map>
        </Card>
      </BikeMapContainer>
    );
  }

}


function mapStateToProps(state: any) {
  return {
    BikeMapPageReducer: state.BikeMapPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    reduxHandleGetBikeMapInfo,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(BikeMap) as React.ComponentClass;