<template>
    <!-- 动态拿到图标 -->
    <!-- <span class="d-icons"></span> -->
    <i :class="`d-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DIcon",
  // 通过props接收
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup() {},
});
</script>
