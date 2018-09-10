import * as React from 'react';
import { Layout, Spin, Icon } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter, RouteComponentProps } from 'react-router-dom';


import BaseHeader from './components/Header/BaseHeader';
import BaseNav from './components/Nav/BaseNav';
import BaseFooter from './components/Footer/BaseFooter';

import './global.css';


const { Sider, Header, Footer, Content } = Layout;


export interface IAdminProps extends RouteComponentProps<any> {
  
};

interface IAdminState {
  readonly isCollapsed: boolean;
};



class Admin extends React.PureComponent<IAdminProps, IAdminState> {

  public readonly state = {
    isCollapsed: false,
  };

  public componentWillMount(): void {
    // 防止页面被拖拽
    document.body.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, false);
  }

  // Handle Nav to show or Hide
  public handleToggleCollapse: React.EventHandler<any> = (callapsed: boolean) => {
    this.setState((prevState) => {
      return { isCollapsed: !prevState.isCollapsed };
    });
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Layout>
          {/* Common nav */}
          <Sider
            collapsible
            collapsed={this.state.isCollapsed}
            onCollapse={(callapsed) => this.handleToggleCollapse(callapsed)}  
          >
            <BaseNav />
          </Sider>
          <Layout>
            {/* Common header */}
            <Header>
              <BaseHeader />
            </Header>

            {/* Router-view */}
            <TransitionGroup className="transition-router" >
              <CSSTransition
                key={this.props.location.pathname}
                timeout={1000}
                classNames="left"
              >
                <Content style={{ position: 'relative', 'minHeight': '530px' }}>
                  {this.props.children}

                  <div className="loadingWrapper" style={{
                    display: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,.05)'
                  }}>
                    <div
                      className="loading-content"
                      style={{ position: 'relative', height: '100%' }}
                    >
                      <Spin
                        style={{ position: 'absolute', bottom: '5%', }}
                        size="large" 
                        tip="加载中..."
                        indicator={<Icon type="loading" />} />
                    </div>
                  </div>

                </Content>
              </CSSTransition>
            </TransitionGroup>
            
            {/* Common footer */}
            <Footer>
              <BaseFooter />
            </Footer>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}


export default withRouter(Admin) as React.ComponentClass<any>;