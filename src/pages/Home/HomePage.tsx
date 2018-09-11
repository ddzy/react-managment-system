import * as React from 'react';
import { Card, Tag } from 'antd';

import {
  HomeContainer,
  CardTitle,
  CardContent,
} from './style';



class HomePage extends React.PureComponent<{}, {}> {

  public initCardContent = (): any[] => {
    const arr = [{
      key: '1',
      content: 'react',
      color: 'magenta',
    }, {
      key: '2',
      content: 'typescript',
      color: 'red',
    }, {
      key: '3',
      content: 'redux',
      color: 'volcano',
    }, {
      key: '4',
      content: 'antd',
      color: 'orange',
    },{
      key: '5',
      content: 'antd-motion',
      color: 'gold',
    },{
      key: '6',
      content: 'axios',
      color: 'lime',
    }, {
      key: '7',
      content: 'mock',
      color: 'blue',
    }, {
      key: '8',
      content: 'react-router',
      color: 'purple',
    }, {
      key: '9',
      content: 'styled-components',
      color: 'cyan',
    }, {
      key: '10',
      content: 'react-transition-group',
      color: 'geekblue',
    }];
    
    return arr.map((value) => {
      return (
        <Tag style={{ margin: '15px', fontSize: '18px' }} key={value.key} color={value.color}>{value.content}</Tag>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <HomeContainer>
        <Card title="React后台管理系统" style={{ width: '400px' }}>
          <CardTitle>技术栈包括</CardTitle>
          <CardContent>{this.initCardContent()}</CardContent>
        </Card>
      </HomeContainer>
    );
  }
}

export default HomePage as React.ComponentClass;