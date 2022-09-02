<template>
  <draggable
    class="el-form-draggable"
    v-model="els"
    group="ElFormDesigner"
    animation="200"
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
  els = []

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

  change() {
    const elForm = this.findElFormComponent(this)
    if (elForm) {
      elForm.$emit('node-change', this.els)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-draggable {
  height: 100%;
}
</style>
