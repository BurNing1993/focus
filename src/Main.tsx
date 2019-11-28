import React from 'react';
import { Card, List } from 'antd';
import AddItem from './components/AddItem'
import { useSelector } from 'react-redux';
import { ToDoItemState,ToDoItem } from './store/types'
import TodoItem from './components/ToDoItem'
import Footer from './components/Footer'

const Main: React.FC = () => {
  const list = useSelector((state: ToDoItemState) => state.list)
  const finishedNum = list.filter(item=>item.isFinish).length
  const unfinishedNum = list.filter(item=>!item.isFinish).length
  return (
    <div id="app">
      <Card title="专注助手" headStyle={{ textAlign: "center" }} >
        <AddItem />
        <List
          footer={<Footer finishedNum={finishedNum} unfinishedNum={unfinishedNum} />}
          bordered
          dataSource={list}
          renderItem={(item:ToDoItem) => (
            <List.Item>
              <TodoItem todoItem={item} />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}
export default Main;
