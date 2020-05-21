import React from 'react'
import { Item, ItemPanel } from 'gg-editor';

export default function index() {
  return (
    <ItemPanel>
      <h4 className="item-title">库位</h4>
      <Item
        className="item"

        model={{
          type: 'circle',
          size: 80,
          label: '库位',
        }}
      >
        <img
          src="https://tva1.sinaimg.cn/large/007S8ZIlly1gf082e669xj30460463yd.jpg"
          width="100"
          height="101"
          draggable={false}
          alt="alt"
        />
      </Item>
      <h4 className="item-title">生产线</h4>
      <Item
        className="item"
        model={{
          type: 'rect',
          size: [120, 40],
          label: '生产线',
        }}
      >
        <img
          src="https://tva1.sinaimg.cn/large/007S8ZIlly1gf082mczn8j305004cjr5.jpg"
          width="120"
          draggable={false}
          alt="alt"
        />
      </Item>
      <h4 className="item-title">仓储点</h4>
      <Item
        className="item"
        model={{
          type: 'triangle',
          size: [50, 10],
          label: '维修点',
        }}
      >
        <img
          src="https://tva1.sinaimg.cn/large/007S8ZIlly1gf082yh9g5j304l04cjr6.jpg"
          width="93"
          draggable={false}
          alt="alt"
        />
      </Item>
    </ItemPanel>
  )
}
