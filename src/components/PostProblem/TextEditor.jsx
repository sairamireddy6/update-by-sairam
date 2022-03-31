import React, { Component } from "react";
import { Typography } from '@material-ui/core';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onChange(content) {
    // console.log('onChange', content);
    let qbody = content;
    console.log(qbody) ; 
  };
  

  render() {
    const { editorState } = this.state;
    return (
      <>
        <Editor editorStyle={{ height: '400px', padding: '5px 10px' }}
          // onChange={(e) => setUser({ qbody: e.target.value })}
          // value={user.qbody}
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
          onChange={this.onChange}
        />
        <Typography>{this.onChange.qbody}</Typography>
      </>
    );
  }
}
