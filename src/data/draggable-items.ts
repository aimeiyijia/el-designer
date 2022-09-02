import { v4 as uuidv4 } from 'uuid'
import mockData from '../../mock'
const DraggableItems = [
  {
    groupName: '表单：',
    id: uuidv4(),
    childs: [
      {
        id: uuidv4(),
        icon: 'radio',
        type: 'radio',
        label: '单选框',
      },
      {
        id: uuidv4(),
        icon: 'check-box',
        type: 'checkbox',
        label: '多选框',
      },
      {
        id: uuidv4(),
        icon: 'input',
        type: 'input',
        label: '输入框',
      },
      {
        id: uuidv4(),
        icon: 'input-number',
        type: 'inputnumber',
        label: '计数器',
      },
      {
        id: uuidv4(),
        icon: 'select',
        type: 'select',
        label: '选择器',
      },
      {
        id: uuidv4(),
        icon: 'cascader',
        type: 'cascader',
        label: '级联选择器',
      },
      {
        id: uuidv4(),
        icon: 'cascader-panel',
        type: 'cascaderpanel',
        label: '级联面板',
      },
      {
        id: uuidv4(),
        icon: 'switch',
        type: 'switchdata',
        label: '开关',
      },
      {
        id: uuidv4(),
        icon: 'slider',
        type: 'slider',
        label: '滑块',
      },
      {
        id: uuidv4(),
        icon: 'time-picker',
        type: 'timeselect',
        label: '时间选择器',
      },
      {
        id: uuidv4(),
        icon: 'time-picker',
        type: 'timepicker',
        label: '时间选取器',
      },
      {
        id: uuidv4(),
        icon: 'date-picker',
        type: 'datepicker',
        label: '日期选择器',
      },
      {
        id: uuidv4(),
        icon: 'date-time-picker',
        type: 'datetimepicker',
        label: '日期时间选择器',
      },
      {
        id: uuidv4(),
        icon: 'upload',
        type: 'upload',
        label: '上传',
      },
      {
        id: uuidv4(),
        icon: 'rate',
        type: 'rate',
        label: '评分',
      },
      {
        id: uuidv4(),
        icon: 'color-picker',
        type: 'colorpicker',
        label: '颜色选择器',
      },
      {
        id: uuidv4(),
        icon: 'transfer',
        type: 'transfer',
        label: '穿梭框',
      },
    ],
  },
]

DraggableItems.forEach(o => {
  if(o.childs){
    o.childs.forEach(m => {
      Object.assign(m, (mockData as { [key: string]: any })[m.type])
    })
  }
})
console.log(DraggableItems, '项目基础参数')
export default DraggableItems
