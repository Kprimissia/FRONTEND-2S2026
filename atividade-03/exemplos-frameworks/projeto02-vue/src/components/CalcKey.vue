<script setup>
defineProps({
  label: { type: String, required: true },
  variant: { type: String, default: 'block' }
});
defineEmits(['press']);
</script>

<template>
  <button :class="['calc-key', variant]" @click="$emit('press')">
    {{ label }}
  </button>
</template>

<style scoped>
.calc-key {
  height: 46px;
  border-radius: 8px;
  border: 3px solid #1d1d1d;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
}
.block { background: #fce9c7; color: #1d1d1d; }
.pipe { background: #00a651; color: #ffffff; }
.fire { background: #e52521; color: #ffffff; }
.star { background: #5c94fc; color: #ffffff; }
</style>
