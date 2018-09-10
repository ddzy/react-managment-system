import * as React from 'react';
import { Col, Row, Card, Button, notification } from 'antd';

import { NotificationWrapper } from './style';



export interface IUiNotificationPageProps {};
interface IUiNotificationPageState {
  // position: string | undefined;
};


class UiNotificationPage extends React.PureComponent<IUiNotificationPageProps, IUiNotificationPageState> {

  // public readonly state = {
  //   position: 'topRight',
  // };

  public handleOpenNotificationWithIcon: React.MouseEventHandler = (e: React.MouseEvent): void => {
    const type = e.currentTarget.getAttribute('data-type') as string;
    
    notification[type]({
      message: 'Notification Title',
      description: `This is ${type} content`,
    }); 
  }

  public handleOpenNotificationPosition: React.MouseEventHandler = (e: React.MouseEvent): void => {
    const position: any = e.currentTarget.getAttribute('data-position');

    notification.open({ 
      placement: position, 
      message: 'Different Position' ,
      description: `The position now is at ${position}`,
    });
  }

  public render(): JSX.Element {
    return (
      <NotificationWrapper>
        <Row gutter={16}>
          <Col>
            <Card title="带有图标">
              <Button htmlType="button" type="primary" data-type="success" onClick={this.handleOpenNotificationWithIcon}>Success</Button>
              <Button htmlType="button" type="default" data-type="info" onClick={this.handleOpenNotificationWithIcon}>Info</Button>
              <Button htmlType="button" type="dashed" data-type="warning" onClick={this.handleOpenNotificationWithIcon}>Warning</Button>
              <Button htmlType="button" type="danger" data-type="error" onClick={this.handleOpenNotificationWithIcon}>Error</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="不同位置">
              <Button htmlType="button" data-position="topRight" onClick={this.handleOpenNotificationPosition}>topRight</Button>
              <Button htmlType="button" data-position="bottomRight" onClick={this.handleOpenNotificationPosition}>bottomRight</Button>
              <Button htmlType="button" data-position="bottomLeft" onClick={this.handleOpenNotificationPosition}>bottomLeft</Button>
              <Button htmlType="button" data-position="topLeft" onClick={this.handleOpenNotificationPosition}>topLeft</Button>
            </Card>
          </Col>
        </Row>
      </NotificationWrapper>
    );
  }
}


export default UiNotificationPage;