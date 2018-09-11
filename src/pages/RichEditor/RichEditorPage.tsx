import * as React from 'react';
import {
  Card,
} from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  
  /**
   * 初始化editor工具栏
   */
  public initModules = () => {
    return {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, false] },],
        [
          { 'size': ['small', false, 'large', 'huge'] }, {
            'color': [
              '#000', '#e70000', '#ff9a00', '#ff0', '#00bb00', '#1890ff', '#0066cd', '#facdcd', '#f06666',
              '#bcbcbc', '#fff',
            ]
          }
        ],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],
    };
  }


  public initFormats = () => {
    return [
      'header', 'size', 'color',
      'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
  }


  public render(): JSX.Element {
    return (
      <EditorContainer>
        <EditorMain>
          <Card title="富文本编辑">
            <ReactQuill
              modules={this.initModules()}
              formats={this.initFormats()}
              placeholder="创作您的文章..."
            />
          </Card>
        </EditorMain>
      </EditorContainer>
    );
  }

}


export default RichEditorPage as React.ComponentClass;