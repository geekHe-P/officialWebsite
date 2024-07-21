<script setup>
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  frontText: {
    type: String,
    required: true,
  },
  backText: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: false,
    default: '#111'
  },
  backColor: {
    type: String,
    required: false,
    default: '#f6f7fb'
  },
  align: {
    type: String,
    required: false,
    default: 'left'
  }
})
const h2 = ref(null)
const isLeft = props.align === 'left'

const init = onMounted( async () => {
   await nextTick()
  h2.value.setAttribute('data-content', props.backText)
  h2.value.style.setProperty('--color', props.backColor)
  if (!isLeft) {
    h2.value.classList.add('mid')
  }
})

init()
</script>

<template>
  <div class="text-cascade-container">
    <h2 ref="h2" :style="{color: props.textColor}">
      {{ props.frontText }}
    </h2>
  </div>

</template>

<style scoped>
.text-cascade-container {
  position: relative;
}

.text-cascade-container h2:before {
  content: attr(data-content);
  display: block;
  font-family: PingFangSC-Semibold, sans-serif;
  font-size: 120px;
  font-weight: 600;
  color: var(--color);
  position: absolute;
  left: -5px;
  bottom: 0;
  z-index: -1;
}

.mid::before {
  left: 50% !important;
  transform: translateX(-50%);
}

.text-cascade-container h2 {
  font-family: PingFangSC-Semibold, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 84px;
  position: relative;
  margin-bottom: 76px;
  z-index: 1;
}

.mid {
  text-align: center;
}

.text-cascade-container h2:after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background-color: #2158ee;
  position: absolute;
  left: 0;
  bottom: -28px;
}

.mid:after {
  left: 50% !important;
  transform: translateX(-50%);
}

@media screen and (max-width: 1300px) {
  .text-cascade-container h2 {
    font-size: 28px;
    line-height: 64px;
    margin-bottom: 46px;
  }

  .text-cascade-container h2:before {
    font-size: 64px;
  }

  .text-cascade-container h2:after {
    bottom: -16px;
  }
}

@media screen and (max-width: 950px) {
  .text-cascade-container h2 {
    display: flex;
    justify-content: center;
  }
  .text-cascade-container h2:before {
    left: 50%;
    transform: translateX(-50%);
  }
  .text-cascade-container h2:after {
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>
