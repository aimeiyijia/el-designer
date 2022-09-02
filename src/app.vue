<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="310px" class="draggable-container">
          <!-- efd: el-form-designer -->
          <div v-for="element in DraggableItems" :key="element.id">
            <div class="group-name">{{ element.groupName }}</div>
            <draggable
              class="efd-draggable"
              v-model="element.childs"
              :group="{name: 'ElFormDesigner', pull: 'clone', put: false}"
              :sort="false"
              ghostClass="ghostClass"
              dragClass="dragClass"
              chosenClass="chosen"
              forceFallback="true"
              animation="200"
              @start="onStart"
            >
              <transition-group>
                <div
                  class="draggable-item"
                  v-for="draggableEl in element.childs"
                  :key="draggableEl.id"
                >
                  <svg-icon
                    :name="draggableEl.icon"
                    width="24"
                    height="24"
                  ></svg-icon>
                  <div>{{ draggableEl.label }}</div>
                </div>
              </transition-group>
            </draggable>
          </div>
        </el-aside>
        <el-main>
          <el-form-plus
            v-model="model"
            :options="options"
            :config="config"
            @node-change="handleNodeChange"
          ></el-form-plus>
        </el-main>
        <el-aside width="400px">Aside</el-aside>
      </el-container>
      <el-footer height="32px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import ElDraggable from './components/ElDraggable.vue'
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

  private config = {
    labelWidth: '120px',
    buttonsConfig: true,
    container: 'ElDraggable',
  }

  private model = { input: 1 }
  private options = []

  handleNodeChange(arr: any) {
    this.options = arr
    console.log('变化外部', arr)
  }

  onStart() {}
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  cursor: pointer;
}
.el-container {
  height: 100%;
  .el-container {
    height: calc(100% - 92px);
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
}
.el-main {
  background-color: #e9eef3;
  .el-form {
    height: 100%;
  }
}
.svg-icon {
  fill: currentColor;
}
</style>
<style lang="scss" scoped>
.draggable-container {
  font-size: 12px;
  padding-left: 8px;
  .group-name {
    font-size: 16px;
    padding-top: 6px;
  }
  .draggable-item {
    display: inline-block;
    text-align: center;
    margin: 4px 2px;
    width: 28.5%;
    border-radius: 2px;
    padding: 12px 4px;
    // transition: all 0.2s;

    .svg-icon {
      margin-bottom: 2px;
    }

    &:hover {
      color: #fff;
      background-color: #409eff;
      transition: all 0.2s;
    }
    &.dragClass {
      color: #fff;
      background-color: #409eff;
    }
    &.ghostClass {
      color: #fff;
      background-color: #409eff;
      margin: 4px 2px;
      padding: 12px 4px;
    }
  }
}
</style>
