<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">
          <!-- efd: el-form-designer -->
          <div v-for="element in DraggableItems" :key="element.id">
            {{ element.name }}
            <draggable
              class="efd-draggable"
              v-model="DraggableItems"
              :options="{
                group: {name: 'ElFormDesigner', pull: 'clone', put: false},
                sort: false
              }"
              chosenClass="chosen"
              forceFallback="true"
              animation="1000"
              @start="onStart"
              @end="onEnd"
            >
              <transition-group>
                <div
                  class="item"
                  v-for="draggableEl in element.childs"
                  :key="draggableEl.id"
                >
                  <svg-icon name="input"></svg-icon>
                  {{ draggableEl.name }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </el-aside>
        <el-main>Main</el-main>
        <el-aside width="400px">Aside</el-aside>
      </el-container>
      <el-footer height="32px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import DraggableItems from './data/draggable-items'

@Component({
  name: 'App',
  components: {
    draggable,
  },
})
export default class extends Vue {
  private drag = false
  // 定义要被拖拽对象的数组
  private DraggableItems = DraggableItems

  onStart() {}
  onEnd() {}
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #d3dce6;
}
.el-main {
  background-color: #e9eef3;
}
.el-footer {
  height: 32px;
}
</style>
