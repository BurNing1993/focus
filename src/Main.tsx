import React from 'react';
import { Card, List } from 'antd';
import AddItem from './components/AddItem'
import { useSelector } from 'react-redux';
import { ToDoItemState } from './store/types'
import TodoItem from './components/ToDoItem'

const Main: React.FC = () => {
  const list = useSelector((state: ToDoItemState) => state.list)
  return (
    <Card title="专注助手" headStyle={{ textAlign: "center" }} id="app">
      <AddItem />
      <List
        footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <TodoItem todoItem={item} />
          </List.Item>
        )}
      />
    </Card>
  )
}
export default Main;
