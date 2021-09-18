import { v4 as uuidv4 } from 'uuid'
const DraggableItems = [
  {
    groupName: '布局',
    id: uuidv4(),
    childs: [
      {
        id: uuidv4(),
        type: 'ElRow',
        name: 'Row行',
        icon: 'row',
      },
      {
        id: uuidv4(),
        type: 'ElCol',
        name: 'Col列',
        icon: 'col',
      },
    ],
  },
  {
    groupName: '表单：',
    id: uuidv4(),
    childs: [
      {
        id: uuidv4(),
        type: 'Input',
        name: '单选框',
        icon: 'radio',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '多选框',
        icon: 'check-box',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '输入框',
        icon: 'input',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '计数器',
        icon: 'input-number',
      },
      {
        id: uuidv4(),
        type: 'Select',
        name: '下拉选择',
        icon: 'select',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '级联选择器',
        icon: 'cascader',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '级联面板',
        icon: 'cascader-panel',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '开关',
        icon: 'switch',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '滑块',
        icon: 'slider',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '时间选择器',
        icon: 'time-picker',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '日期选择器',
        icon: 'date-picker',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '日期时间选择器',
        icon: 'date-time-picker',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '上传',
        icon: 'upload',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '评分',
        icon: 'rate',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '颜色选择器',
        icon: 'color-picker',
      },
      {
        id: uuidv4(),
        type: 'Input',
        name: '穿梭框',
        icon: 'transfer',
      },
    ],
  },
]
export default DraggableItems
