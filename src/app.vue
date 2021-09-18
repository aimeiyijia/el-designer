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
              :group="{name: 'ElFormDesigner', pull: 'clone', put: false}"
              :sort="false"
              ghostClass="ghostClass"
              dragClass="dragClass"
              chosenClass="chosen"
              forceFallback="true"
              animation="800"
              @start="onStart"
              @end="onEnd"
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
                  <div>{{ draggableEl.name }}</div>
                </div>
              </transition-group>
            </draggable>
          </div>
        </el-aside>
        <el-main>
          <draggable
            class="efd-draggable"
            v-model="arr2"
            group="ElFormDesigner"
            animation="100"
            @clone="clone"
          >
            <div
              class="draggable-item"
              v-for="(draggableEl, index) in arr2"
              :key="index"
            >
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="form.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox
                      label="美食/餐厅线上活动"
                      name="type"
                    ></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">
                    立即创建
                  </el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </draggable>
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

  private arr2 = [
    {
      id: 1,
      type: 'ElCol',
      name: 'Col列',
      icon: 'col',
    },
  ]

  private form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  }

  onStart() {}
  onEnd(el) {
    console.log(DraggableItems, '数据')
    console.log(el, '结束')
  }

  clone() {
    console.log(this, '克隆')
  }
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
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
}
.el-main {
  background-color: #e9eef3;
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
