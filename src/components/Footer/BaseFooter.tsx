import * as React from 'react';
import { Icon } from 'antd';

import {
  FooterFriendLink,
  LinkContent,
  LinkContentSpan,
  LinkContentP
} from './style';




/**
 * 公共尾部组件
 */
class BaseFooter extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="yang-footer">
        <FooterFriendLink>
          <LinkContent>
            <LinkContentSpan>
              <Icon type="github" />
            </LinkContentSpan>
            <LinkContentP>
              https://github.com/ddzy/
            </LinkContentP>
          </LinkContent>
        </FooterFriendLink>
      </div>
    );
  }
}


export default BaseFooter;