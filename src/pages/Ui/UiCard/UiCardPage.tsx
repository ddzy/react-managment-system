import * as React from 'react';
import {  Card, Button } from 'antd';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { CardWrapper, LoadMoreWrapper } from './style';
import { getCardList } from './UiCardPage.redux';
import CardModal from './CardModal/CardModal';



export interface IUiCardPageProps {
  getCardList: (data: { page: number }) => any;
  UiCardPageReducer: { cardlist: any[], hasMore: boolean, page: number },
};
interface IUiCardPageState {
  visible: boolean,
  desc: string | '';
  url: string | '';
  title: string | '';
};



class UiCardPage extends React.PureComponent<IUiCardPageProps, IUiCardPageState> {

  public readonly state = {
    visible: false, // Modal Toggle
    desc: '',   // 每张卡片描述
    url: '',    // 每张卡片url
    title: '',  // 卡片标题
  };

  public componentDidMount(): void {
    this.props.getCardList({ page: 1 });
  }

  // 初始化cardlist
  public initCardList = (): any => {
    const cardlist: any[] = this.props.UiCardPageReducer.cardlist;

    return cardlist.length && cardlist.map((value) => {
      return (
        <Card
          key={value.id}
          data-url={value.url}
          data-desc={value.description}
          data-title={value.title}
          hoverable
          cover={<img src={value.url} alt={value.title} />}
          style={{ width: '250px', marginBottom: '10px' }}
          onClick={this.hadnleWatchOneCard}
        >
          <Card.Meta title={value.title} description={value.description} />
        </Card>
      );
    });
  }

  public handleLoadMore: React.MouseEventHandler = (e: React.MouseEvent): void => {
    // 加载更多
    this.props.getCardList({ page: ++this.props.UiCardPageReducer.page, });
  }

  public handleToggleVisible = (): void => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }

  public hadnleWatchOneCard: React.MouseEventHandler = (e: React.MouseEvent): void => {
    // 查看单个卡片
    const target = e.currentTarget;

    this.setState({
      url: target.getAttribute('data-url') || '',
      desc: target.getAttribute('data-desc') || '',
      title: target.getAttribute('data-title') || '',
    })
    this.handleToggleVisible();
  }

  public render(): JSX.Element {
    return (
      <CardWrapper>
        <Masonry
          options={{ transitionDuration: 500, gutter: 10 }}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {this.initCardList()}
        </Masonry>
        <LoadMoreWrapper>
          {
            this.props.UiCardPageReducer.hasMore
              ? (
                  <Button
                    htmlType="button"
                    type="primary"
                    style={{ width: '100%' }}
                    onClick={this.handleLoadMore}
                  >加载更多</Button>
                )
              : <p>没有更多了...</p>
          }
        </LoadMoreWrapper>  
      
        {/* Modal */}
        <CardModal 
          visible={this.state.visible}
          onCancel={this.handleToggleVisible}
          url={this.state.url}
          desc={this.state.desc}
          title={this.state.title}
        />
      </CardWrapper>
    );
  }
}


function mapStateToProps(state: any) {
  return {
    UiCardPageReducer: state.UiCardPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    getCardList,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(UiCardPage) as React.ComponentClass<any>;
