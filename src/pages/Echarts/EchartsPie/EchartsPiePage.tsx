import * as React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import * as echarts from 'echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import ReactEcharts from 'echarts-for-react';

import { getPieData } from './EchartsPie.redux';



export interface IEchartsPiePageProps {
  EchartsPieReducer: { list: any[], type: string, highlight: any[] };
  getPieData: (data: { type: string }) => void;
};
interface IEchartsPiePageState {};


class EchartsPiePage extends React.PureComponent<IEchartsPiePageProps, IEchartsPiePageState> {

  public readonly state = {};

  public componentDidMount(): void {
    this.props.getPieData({ type: 'custom' });
    this.props.getPieData({ type: 'dough' });
  }

  public initOptionOne = (): object => {
    const data = this.props.EchartsPieReducer.list as any[];

    return {
      backgroundColor: '#2c343c',
  
      title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
              color: '#ccc'
          }
      },
  
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
  
      visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
              colorLightness: [0, 1]
          }
      },
      series : [
          {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:data.sort((a, b) => a.value - b.value),
              roseType: 'radius',
              label: {
                  normal: {
                      textStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      lineStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 10,
                      length2: 20
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#c23531',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              },
  
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: (idx: number) => {
                  return Math.random() * 200;
              }
          }
      ]
  };
  }

  public initOptionTwo = (): object => {
    return {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data: this.props.EchartsPieReducer.list.map((value) => {
            return value.name;
          }),
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: this.props.EchartsPieReducer.list,
          }
      ]
  };
  
  }


  public render(): JSX.Element {
    return (
      <div className="PieWrapper" style={{ padding: '20px 60px 0', textAlign: 'left' }}>
        <Row>
          <Col>
            <Card title="Customized Pie">
              <ReactEcharts
                echarts={echarts}
                option={this.initOptionOne()}
                notMerge={true}
                lazyUpdate={true}
                theme={'themeFour'}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col>
            <Card title="Doughnut Pie">
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
    EchartsPieReducer: state.EchartsPieReducer,
  };
}
function mapDispatchToProps() {
  return {
    getPieData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(EchartsPiePage) as React.ComponentClass<any>;