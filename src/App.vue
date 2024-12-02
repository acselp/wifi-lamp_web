<template>
  <div class="app">
    <n-card title="Card">
      Card Content
    </n-card>
  </div>
</template>

<script setup lang="ts">
import {LampService} from "@/services/lampService.ts";

const onTurnOn = () => {
  LampService.turnOnLamp()
      .then((res) => {
        console.log(res.data);
      })
}

const onTurnOff = () => {
  LampService.turnOffLamp()
}

</script>

<style scoped>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #9f9f9f;
  }
</style>