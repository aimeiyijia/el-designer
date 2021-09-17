import { v4 as uuidv4 } from 'uuid';
const DraggableItems = [
  {
    name: '表单',
    childs: [
      {
        id: uuidv4(),
        type: 'Input',
        name: '输入框',
        icon: 'input',
      },
    ],
  },
]
export default DraggableItems
