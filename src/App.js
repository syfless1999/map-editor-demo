import React, { useRef, useState, useEffect } from 'react';
import { Card, Button, message } from 'antd';
import BasicLayout from '@ant-design/pro-layout';
import GGEditor, { Flow, EditableLabel, constants } from 'gg-editor';
import ItemPanel from './components/ItemPanel';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './components/DetailPanel';
import Toolbar from './components/Toolbar';

import { getData, setData } from './utils/localStorage';

import './index.less';



const layoutProps = {
  title: "JABIL 简易地图编辑器",
  logo: "https://tva1.sinaimg.cn/large/007S8ZIlly1gf0411artnj30500500sh.jpg",
  layout: "topmenu",
  navTheme: 'light',
}


const { EditorCommand } = constants;

// 操作命令面板集合
const FLOW_COMMAND_LIST = [
  EditorCommand.Undo,
  EditorCommand.Redo,
  '|',
  EditorCommand.Copy,
  EditorCommand.Paste,
  EditorCommand.Remove,
  '|',
  EditorCommand.ZoomIn,
  EditorCommand.ZoomOut,
];



function App() {
  const flow = useRef();
  const initialNodes = () => getData('nodes') || [];
  const [nodes, setNodes] = useState(initialNodes);



  useEffect(() => {
    setData('nodes', nodes);
    nodes.length && message.success(`当前地图共  ${nodes.length}  个节点`);
  }, [nodes])

  const data = {
    nodes: nodes,
    edges: [],
  };

  // 获取所有节点
  const updateNodes = () => {
    const nodes = flow.current.graph.getNodes().map(node => node._cfg.model);
    setNodes(nodes);
  }

  return (
    <BasicLayout {...layoutProps}>
      <GGEditor className="gg-editor">
        <Toolbar commands={FLOW_COMMAND_LIST}></Toolbar>
        <div className="panel">
          <Card title="选择地图节点" className="item-panel">
            <ItemPanel  ></ItemPanel>
          </Card>
          <Flow
            className="graph"
            data={data}
            ref={flow}
          />
          <div className="right-panel">
            <div className="detail-panel">
              <NodePanel />
              <EdgePanel />
              <MultiPanel />
              <CanvasPanel />
            </div>
            <Card title="地图更新" bordered={false} className="submit-panel">
              <Button type="primary" size="large" onClick={updateNodes}>
                确认提交
          </Button>
            </Card>
          </div>
        </div>
        <EditableLabel />
      </GGEditor>
    </BasicLayout>
  );
}

export default App;
