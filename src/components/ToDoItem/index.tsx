import React from 'react';
import { ToDoItem } from '../../store/types'
import { Checkbox, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../store/index'
const { Text } = Typography;

interface Props {
  todoItem: ToDoItem;
}

const TodoItem = ({ todoItem }: Props) => {

  const dispatch = useDispatch()

  const onChange = (e: any) => {
    dispatch(updateItem({ ...todoItem, isFinish: e.target.checked }))
  }

  return (
    <>
      <Checkbox defaultChecked={todoItem.isFinish} onChange={onChange}>
        <Text delete={todoItem.isFinish} disabled={todoItem.isFinish}>{todoItem.item}</Text>
      </Checkbox>
    </>
  )
}
export default TodoItem;
