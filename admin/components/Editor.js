import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';

 
const Editor = ({
  value,
  onChange,
}) => {
  
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      
      config={ {
        removePlugins: ["MediaEmbedToolbar"]
    } }
    />
  );
};

export default Editor;