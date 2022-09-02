import { v4 as uuidv4 } from 'uuid'
const DraggableItems = [
  {
    groupName: '表单：',
    id: uuidv4(),
    childs: [
      {
        id: uuidv4(),
        icon: 'radio',
        type: 'Input',
        label: '单选框',
        field: 'radio',
        value: '单选框'
      },
      {
        id: uuidv4(),
        icon: 'check-box',
        type: 'Input',
        label: '多选框',
        field: 'checkBox',
        value: '多选框'
      },
      {
        id: uuidv4(),
        icon: 'input',
        type: 'Input',
        label: '输入框',
        field: 'input',
        value: '输入框'
      },
      {
        id: uuidv4(),
        icon: 'input-number',
        type: 'InputNumber',
        label: '计数器',
        field: 'inputNumber',
        value: '计数器'
      },
      {
        id: uuidv4(),
        icon: 'select',
        type: 'Select',
        label: '选择器',
        field: 'select',
        value: '选择器'
      },
      {
        id: uuidv4(),
        icon: 'cascader',
        type: 'Input',
        label: '级联选择器',
        field: 'cascader',
        value: '级联选择器'
      },
      {
        id: uuidv4(),
        icon: 'cascader-panel',
        type: 'CascaderPanel',
        label: '级联面板',
        field: 'cascaderPanel',
        value: '级联面板'
      },
      {
        id: uuidv4(),
        icon: 'switch',
        type: 'Switch',
        label: '开关',
        field: 'switch',
        value: '开关'
      },
      {
        id: uuidv4(),
        icon: 'slider',
        type: 'Slider',
        label: '滑块',
        field: 'slider',
        value: 1
      },
      {
        id: uuidv4(),
        icon: 'time-picker',
        type: 'TimeSelect',
        label: '时间选择器',
        field: 'timeSelect',
        value: '时间选择器'
      },
      {
        id: uuidv4(),
        icon: 'time-picker',
        type: 'TimePicker',
        label: '时间选取器',
        field: 'timePicker',
        value: '时间选取器'
      },
      {
        id: uuidv4(),
        icon: 'date-picker',
        type: 'DatePicker',
        label: '日期选择器',
        field: 'datePicker',
        value: '日期选择器'
      },
      {
        id: uuidv4(),
        icon: 'date-time-picker',
        type: 'DateTimePicker',
        label: '日期时间选择器',
        field: 'dateTimePicker',
        value: '日期时间选择器'
      },
      {
        id: uuidv4(),
        icon: 'upload',
        type: 'Upload',
        label: '上传',
        field: 'upload'
      },
      {
        id: uuidv4(),
        icon: 'rate',
        type: 'Rate',
        label: '评分',
        field: 'rate',
        value: ''
      },
      {
        id: uuidv4(),
        icon: 'color-picker',
        type: 'colorPicker',
        label: '颜色选择器',
        field: 'colorPicker',
        value: '#409EFF'
      },
      {
        id: uuidv4(),
        icon: 'transfer',
        type: 'Transfer',
        label: '穿梭框',
        field: 'transfer',
        value: []
      },
    ],
  },
]
export default DraggableItems
