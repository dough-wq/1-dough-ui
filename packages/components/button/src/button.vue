<template>
  <button :class="classes">
    <!-- 普通按钮图标 -->
    <i v-if="icon && !loading" :class="icon"></i>
    <!-- 加载 -->
    <i v-if="loading" class="x-icon-jiazai"></i>
    <!-- 按钮内容插槽 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
// vue3组件传值 限制类型:PropType
type buttonType = "primary" | "danger" | "info" | "text";
export default defineComponent({
  name: "DButton",
  props: {
    // 按钮颜色
    type: {
      type: String as PropType<buttonType>,
      // 校验
      vaildator: (val: string) => {
        return ["primary", "danger", "info", "text"].includes(val);
      },
      default: "primary",
    },
    // 按钮图标 d-icon-内容
    icon: {
      type: String,
      default: "",
    },
    // 按钮禁用
    disabled: Boolean,
    //按钮是否圆角
    round: Boolean,
    // 是否加载
    loading: Boolean,
  },
  setup(props, ctx) {
    console.log(props.type);
    // 根据用户传入的不同的内容，显示不同的效果  使用computed
    // 写个动态样式
    const classes = computed(() => [
      "d-button",
      // 修饰动态的样式
      "d-button--" + props.type,
      // 嵌套对象 状态
      {
        "is-disabled": props.disabled,
        "is-round": props.round,
        "is-loading": props.loading,
      },
    ]);
    return {
      classes,
    };
  },
});
</script>
