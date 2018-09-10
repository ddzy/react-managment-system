import * as React from 'react';

import {
  EditorContainer,
  EditorMain,
} from './style';


export interface IRichEditorPageProps {};
interface IRichEditorPageState {};


class RichEditorPage extends React.PureComponent<
  IRichEditorPageProps,
  IRichEditorPageState
> {

  public readonly state = {}


  public render(): JSX.Element {
    return (
      <EditorContainer>
        <EditorMain>
          富文本
        </EditorMain>
      </EditorContainer>
    );
  }

}


export default RichEditorPage;