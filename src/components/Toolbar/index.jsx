import React from 'react'
import upperFirst from 'lodash/upperFirst';
import { Tooltip, Divider } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Command } from 'gg-editor';

import './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    'https://at.alicdn.com/t/font_1518433_oa5sw7ezue.js',
  ],
});



const Toolbar = ({ commands }) => {
  return (
    <div className="toolbar">
      {commands.map((name, index) => {
        if (name === '|') {
          return <Divider key={index} type="vertical" />;
        }
        return (
          <Command key={name} name={name} className="command" disabledClassName="commandDisabled">
            <Tooltip title={upperFirst(name)}>
              <IconFont type={`icon-${name}`} />
            </Tooltip>
          </Command>
        );
      })}
    </div>
  )
};


export default Toolbar;