<template>
  <Transition mode="out-in" name="fade" ><slot></slot></Transition>
</template>
<style scoped>
.fade-enter-active,
.v-leave-active{
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.v-leave-to{
  opacity: 0;
}
</style>
