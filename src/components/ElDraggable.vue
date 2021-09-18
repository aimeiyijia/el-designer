<template>
  <div>
    <draggable class="ElFormDesigner" group="ElFormDesigner" animation="400">
      <slot></slot>
    </draggable>
  </div>
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
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
