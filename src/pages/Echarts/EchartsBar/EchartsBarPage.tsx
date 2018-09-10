import * as React from 'react'
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
// 引入echarts主模块
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import ReactEcharts from 'echarts-for-react';


import { BarWrapper } from './style';
import { getBarData } from './EchartsBar.redux';
import themeOne from '../../../config/echarts-theme-macarons';
import themeTwo from '../../../config/echarts-theme-vintage';
import themeThree from '../../../config/echarts-theme-dark';



// 注册主题
echarts.registerTheme('themeOne', themeOne);
echarts.registerTheme('themeTwo', themeTwo);
echarts.registerTheme('themeThree', themeThree);


export interface IEchartsBarPageProps {
  getBarData: (data: { type: string }) => void;
  EchartsBarReducer: { delayData: any, stuckData: any, crossData: any };
  BaseNavReducer: { menuName: string };
};
export interface IEchartsBarPageState { };


/**
 * 柱状图
 */
class EchartsBarPage extends React.PureComponent<IEchartsBarPageProps, IEchartsBarPageState> {

  public readonly state = {};

  public componentDidMount(): void {
    // 获取图表数据
    this.props.getBarData({ type: 'delay' });
    this.props.getBarData({ type: 'stuck' });
    this.props.getBarData({ type: 'cross' });
  }

  public initOptionOne = (): any => {
    const xAxisData = this.props.EchartsBarReducer.delayData.xAxis;
    const xDataOne = this.props.EchartsBarReducer.delayData.xDataOne;
    const xDataTwo = this.props.EchartsBarReducer.delayData.xDataTwo;

    return {
      title: {
        text: '柱状图动画延迟'
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: xDataOne,
        animationDelay: (idx: number): number => {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: xDataTwo,
        animationDelay: (idx: number): number => {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number): number => {
        return idx * 5;
      }
    };
  }

  public initOptionTwo = (): any => {
    const data = this.props.EchartsBarReducer.stuckData.xData;
    const cities = this.props.EchartsBarReducer.stuckData.xAxis;

    return {
      title: {
        text: '在中国租个房子有多贵？',
        subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
      },
      legend: {
        show: true,
        data: ['价格范围', '均值']
      },
      grid: {
        top: 100
      },
      angleAxis: {
        type: 'category',
        data: cities
      },
      tooltip: {
        show: true,
        formatter: (params: any) => {
          const id = params.dataIndex;
          return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
        }
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        data: data.map((d: any[]) => {
          return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
      }, {
        type: 'bar',
        data: data.map((d: any[]) => {
          return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '价格范围',
        stack: '最大最小值'
      }, {
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        data: data.map((d: any[]) => {
          return d[2] - 100;
        }),
        coordinateSystem: 'polar',
        stack: '均值',
        silent: true,
        z: 10
      }, {
        type: 'bar',
        data: data.map((d: any[]) => {
          return 100 * 2
        }),
        coordinateSystem: 'polar',
        name: '均值',
        stack: '均值',
        barGap: '-100%',
        z: 10
      }],
    };
  }

  public initOptionThree = (): any => {
    const labelRight = {
      normal: {
        position: 'right'
      }
    };
    const yAxis = this.props.EchartsBarReducer.crossData.yAxis;
    const yData = this.props.EchartsBarReducer.crossData.yData.map((value: any) => {
      return value.value > 0
        ? { ...value, label: labelRight }
        : value;
    });

    return {
      title: {
        text: '交错正负轴标签',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 80,
        bottom: 30
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: { lineStyle: { type: 'dashed' } },
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: yAxis
      },
      series: [
        {
          name: '生活费',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              formatter: '{b}'
            }
          },
          data: yData
        }
      ]
    };

  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <BarWrapper>
          <Row>
            <Col>
              <Card title="柱状图&动画延迟">
                <ReactEcharts
                  echarts={echarts}
                  option={this.initOptionOne()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={'themeOne'}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px' }}>
            <Col>
              <Card title="极坐标下&堆叠状态">
                <ReactEcharts
                  echarts={echarts}
                  option={this.initOptionTwo()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={'themeTwo'}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px' }}>
            <Col>
              <Card title="交叉&正负轴">
                <ReactEcharts
                  echarts={echarts}
                  option={this.initOptionThree()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={'themeThree'}
                />
              </Card>
            </Col>
          </Row>
        </BarWrapper>
      </React.Fragment>
    );
  }
}



function mapStateToProps(state: any) {
  return {
    EchartsBarReducer: state.EchartsBarReducer,
    BaseNavReducer: state.BaseNavReducer,
  };
}

function mapDispatchToProps() {
  return {
    getBarData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(EchartsBarPage) as React.ComponentClass<any>;