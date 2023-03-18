<template>
  <ul class="demo-icon-list">
    <li
      class="icon-item"
      v-for="(item, index) in iconList"
      :key="index"
    >
    <span class="demo-svg-icon">
      <span class="icon-container">
        <d-icon :name="item" style="font-size: 20px"></d-icon>
      </span>
      <span class="icon-name">{{ item }}</span>
      </span>
    </li>
  </ul>
</template>
<script lang="ts" setup>

const iconList = [
  "jiazai",
  "jiazai1",
  "jiazai2",
  "jiazai3",
  "jiazai4",
  "caozuoruanjian - 01",
  "caozuoruanjian - 02",
  "caozuoruanjian - 03",
  "caozuoruanjian - 04",
  "caozuoruanjian - 05",
  "caozuoruanjian - 12",
  "caozuoruanjian - 24",
  "shouye",
  "shuimianqingkuang",
  "shuimianshuju",
  "baogao1",
  "shouye1",
  "gongneng",
  "xiaoxi2",
  "wode",
  "shujufenxi",
  "zijinfenxi",
  "baobiao",
  "tianjia",
  "gengduo",
  "shijian",
  "chaxun",
  "quanyixinxi",
  "xitonggonggao",
  "shengchan",
  "yonghuxinxi",
  "zhiliang",
  "tuokeshuju",
  "qudaozheshuai",
  "time_1",
  "triangleLineUp_1",
  "triangleLineDown_1",
  "triangleLineRight_1",
  "triangleLineLeft_1",
  "searchHistory_1",
  "play",
];
</script>
<style lang="scss" scoped>
.demo-icon-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-radius: 4px;
  

  .icon-item {
    text-align: center;
    color: gray;
    width: 90px;
    height: 90px;
    font-size: 13px;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    transition: background-color 0.3s;

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
    }
  }
}

.icon-name {
  margin-top: 8px;
  height: 40px;
  line-height: 16px;
  width: 80%;
}

.icon-container {
  height: 30px;
  display: flex;
  flex-direction: column-reverse;
}
</style>
