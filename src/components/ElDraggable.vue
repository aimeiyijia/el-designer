<template>
  <draggable
    tag="el-form"
    class="ElFormDesigner"
    v-model="arr"
    group="ElFormDesigner"
    animation="400"
    @change="change"
  >
    <slot></slot>
  </draggable>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import draggable from 'vuedraggable'

@Component({
  name: 'ElDraggable',
  components: {
    draggable,
  },
})
export default class extends Vue {
  arr = [
    {
      icon: 'cascader',
      field: 'input890',
      value: 'hdhdh',
      id: '5d2d88f1-b84c-4efc-915a-1a2b4ef8265f',
      name: '级联选择器',
      type: 'Input',
    },
  ]

  findElFormComponent(instance: Vue): any {
    const componentName = 'ElForm'
    let parent = instance.$parent || instance.$root
    let name = (parent.$options as any).componentName

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent

      if (parent) {
        name = (parent.$options as any).componentName
      }
    }
    if (parent) {
      return parent
    }
    return false
  }

  change(val) {
    console.log(this.arr, '变化')
    const elForm = this.findElFormComponent(this)
    if (elForm) {
      console.log(elForm, '父')
      elForm.$emit('node-change', this.arr)
    }
    // console.log(this.arr)
    // console.log(val, '变化')
  }
}
</script>

<style lang="scss" scoped>
</style>
