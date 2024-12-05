<template>
  <div class="app">
    <n-card title="Control Panel">
      <div class="panel-body">
        <n-button @click="onTurnOn">
          Turn On
        </n-button>
        <n-button @click="onTurnOff">
          Turn Off
        </n-button>
        <n-color-picker :onUpdate:value="onUpdateColor" />
        <n-button @click="setLampColor">Set lamp color</n-button>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import {LampService} from "@/services/lampService.ts";
import {ref} from "vue";

const isLampOn = ref(false);
const lampColor = ref('');

const toggleLamp = () => {
  isLampOn.value = !isLampOn.value;
  handleToggleLampCb()
}

const handleToggleLampCb = () => {
  if (isLampOn.value) {
    onTurnOn()
  }
  else {
    onTurnOff()
  }
}

const onUpdateColor = (value: string) => {
  lampColor.value = value
  LampService.setLampColor(lampColor.value.slice(5, -1).replace(/\s+/g, ""))
}

const setLampColor = () => {
  LampService.setLampColor(lampColor.value.slice(5, -1).replace(/\s+/g, ""))
}

const onTurnOn = () => {
  LampService.turnOnLamp();
}

const onTurnOff = () => {
  LampService.turnOffLamp();
}

</script>

<style scoped>
  .app {
    padding: 10% 20%;
  }

  .panel-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    & > * {
      width: 100%;
    }

    .turnonbutton {
      width: 50%;
    }
  }
</style>