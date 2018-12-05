import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.css'
const option = {};
require('json-schema-editor-visual/dist/main.css');
const schemaEditor = require("json-schema-editor-visual/dist/main.js");
const SchemaEditor = schemaEditor(option);

const data = document.getElementById('id_{{name}}').value;

render(
    <SchemaEditor
        data={data}
        onChange={e => {
            document.getElementById('id_{{name}}').value = e;
            console.log(e);
        }}
    />,
    document.getElementById('root')
);
