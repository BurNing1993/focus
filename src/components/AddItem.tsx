import React, { useState } from 'react';
import { Input, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/index'
const { Search } = Input;

const AddItem: React.FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const change = (e: any) => {
    setValue(e.target.value)
  }

  const search = (value: string) => {
    dispatch(addItem({ id: Date.now(), item: value, isFinish: false }));
    setValue('')
  }

  return (
    <Search
      allowClear
      value={value}
      placeholder="input text"
      enterButton={<Icon type="plus" />}
      size="large"
      onChange={change}
      onSearch={search}
    />
  )
}
export default AddItem;
