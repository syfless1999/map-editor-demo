import React from 'react';
import { DetailPanel, withEditorContext } from 'gg-editor';
import { Form } from '@ant-design/compatible';
import { Card, Input } from 'antd'



const { Item } = Form;

const typeTitle = {
  node: '节点',
  edge: '边',
  'multi': '复合节点',
  canvas: '画布'
}

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};



class Panel extends React.Component {
  handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const { form } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      const { type, nodes, edges, executeCommand } = this.props;

      const item = type === 'node' ? nodes[0] : edges[0];

      if (!item) {
        return;
      }

      executeCommand('update', {
        id: item.get('id'),
        updateModel: {
          ...values,
        },
      });
    });
  };

  renderNodeDetail = () => {
    const { form } = this.props;

    return (
      <Form>
        <Item label="Label" {...formItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: '',
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
      </Form>
    );
  };

  renderEdgeDetail = () => {
    const { form } = this.props;

    return (
      <Form>
        <Item label="Label" {...formItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: '',
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
      </Form>
    );
  };

  renderMultiDetail = () => {
    return null;
  };

  renderCanvasDetail = () => {
    return <p>请在左侧选择一种地图节点 :)</p>;
  };

  render() {
    const { type } = this.props;

    return (
      <Card title={typeTitle[type]} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'multi' && this.renderMultiDetail()}
        {type === 'canvas' && this.renderCanvasDetail()}
      </Card>
    );
  }
}

const WrappedPanel = Form.create({
  mapPropsToFields(props) {
    const { type, nodes, edges } = props;

    let label = '';

    if (type === 'node') {
      label = nodes[0].getModel().label;
    }

    if (type === 'edge') {
      label = edges[0].getModel().label;
    }

    return {
      label: Form.createFormField({
        value: label,
      }),
    };
  },
})(withEditorContext(Panel));



export const NodePanel = DetailPanel.create('node')(WrappedPanel);
export const EdgePanel = DetailPanel.create('edge')(WrappedPanel);
export const MultiPanel = DetailPanel.create('multi')(WrappedPanel);
export const CanvasPanel = DetailPanel.create('canvas')(WrappedPanel);
