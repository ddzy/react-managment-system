import * as React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import * as echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import ReactEcharts from 'echarts-for-react';

import { getLineData } from './EchartsLine.redux';



export interface IEchartsLinePageProps {
  getLineData: (data: { type: string }) => void;
  EchartsLineReducer: { xAxis: string[], type: string, xData: any[] };
};
interface IEchartsLinePageState {};



class EchartsLinePage extends React.PureComponent<IEchartsLinePageProps, IEchartsLinePageState> {

  public readonly state = {};

  public componentDidMount(): void {
    this.props.getLineData({ type: 'area' });
  }

  public initOptionOne = (): object => {
    return {
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.props.EchartsLineReducer.xAxis,
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: this.props.EchartsLineReducer.xData,
          type: 'line',
          areaStyle: {}
      }]
  };
  
  }

  public initOptionTwo = (): object => {
    return {
      title: {
          text: '堆叠区域图'
      },
      tooltip : {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
              name:'视频广告',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
              name:'直接访问',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
              },
              areaStyle: {normal: {}},
              data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
      ]
  };
  }

  public render(): JSX.Element {
    return (
      <div
        className="LineWrapper"
        style={{ padding: '20px 60px 0', textAlign: 'left' }}
      >
        <Row>
          <Col>
            <Card title="Basic Area Line">
              <ReactEcharts
                echarts={echarts}
                option={this.initOptionOne()}
                notMerge={true}
                lazyUpdate={true}
                theme={'themeFive'}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col>
            <Card title="Stacked Area Line">
              <ReactEcharts
                echarts={echarts}
                option={this.initOptionTwo()}
                notMerge={true}
                lazyUpdate={true}
                theme={'themeFive'}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}



function mapStateToProps(state: any) {
  return {
    EchartsLineReducer: state.EchartsLineReducer,
  };
}
function mapDispatchToProps() {
  return {
    getLineData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(EchartsLinePage) as React.ComponentClass<any>;