<template>
  <div>
    <draggable
      class="efd-draggable"
      v-model="arr2"
      :group="{name: 'ElFormDesigner', pull: 'clone'}"
      @clone="clone"
    >
      <transition-group>
        <div
          class="draggable-item"
          v-for="draggableEl in arr2"
          :key="draggableEl.id"
        >
          <div>{{ draggableEl.name }}</div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
