import React, { useRef } from 'react';
import { Card, Button } from 'antd';
import GGEditor, { Flow, EditableLabel } from 'gg-editor';
import ItemPanel from './components/ItemPanel';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './components/DetailPanel';

import { getData, setData } from './utils/localStorage';

import './index.less';





const data = {
  nodes: [],
  edges: [],
};


function App() {
  const flow = useRef();
  const data = {
    nodes: getData("nodes"),
    edges: [],
  };

  // 获取所有节点
  const getAllNodes = (e) => {
    const nodes = flow.current.graph.getNodes().map(node => node._cfg.model);
    setData('nodes', nodes);
  }

  return (
    <div>
      <h1 className="title">简易地图编辑器</h1>
      <GGEditor className="gg-editor">
        <ItemPanel></ItemPanel>
        <Flow
          className="graph"
          data={data}
          ref={flow}
          onClick={getAllNodes}
        />
        <div className="right-panel">
          <div className="detail-panel">
            <NodePanel />
            <EdgePanel />
            <MultiPanel />
            <CanvasPanel />
          </div>
          <Card title="地图更新" bordered={false}>
            <Button type="primary" size="large" onClick={getAllNodes}>
              确认提交
          </Button>
          </Card>
        </div>
        <EditableLabel />
      </GGEditor>
    </div>
  );
}

export default App;
