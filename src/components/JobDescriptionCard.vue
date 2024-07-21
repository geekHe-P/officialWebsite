<script setup>
import iconClose from '@/assets/images/icon/close.svg'
import { state } from '@/stores/index.js'

defineProps({
  isShow: {
    type: Boolean,
    required: false,
    default: false
  },
  title: {
    type: String,
    required: true,
  },
  englishTitle: {
    type: String,
    required: true,
  },
  jobDetails: {
    type: Array,
    required: true,
  },
  requirements: {
    type: Array,
    required: true,
  },
  notice: {
    type: Array,
    required: false,
    default: null
  }
})

const emit = defineEmits(['closeDialog'])

const closeDialog = () => {
  state().setIsDialog(false)
  emit('closeDialog', false)
}

</script>

<template>
  <div v-show="isShow" class="job-description-card">
    <div class="description-card">
      <div class="description-card-header">
        <img class="close" :src="iconClose" alt="" @click="closeDialog" />
        <h4> {{ title }}</h4>
        <p> {{ englishTitle }}</p>
      </div>
      <div class="description-card-body">
        <h5>
          岗位职责 :
        </h5>
        <div class="text-content">
          <p v-for="(item, index) in jobDetails" :key="index"> {{ item }}</p>
        </div>
        <h5>
          任职要求 :
        </h5>
        <div class="text-content">
          <p v-for="(item, index) in requirements" :key="index"> {{ item }}</p>
        </div>
        <div v-show="notice" class="notice">
          <h5>
            Notice :
          </h5>
          <div class="text-content">
            <p v-for="(item, index) in notice" :key="index"> {{ item }}</p>
          </div>
        </div>
        <h5>
          简历投递 :
        </h5>
        <div class="text-content" style="color: #2158ee">
          zhaopin@xxxxx-inc.com
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-description-card {
  margin: auto;
  position: fixed;
  display: block;
  z-index: 1500;
}

.description-card {
  width: 1030px;
  min-height: 740px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}

.description-card-header {
  width: 100%;
  height: 190px;
  background-color: #242a3a;
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  color: rgb(255 255 255 / 50%);
  padding: 65px 95px 0;
  box-sizing: border-box;
  position: relative;
}

.close {
  width: 24px;
  height: 24px;
  fill: #fff;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
}

.description-card-header h4 {
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  margin-bottom: 20px;
}

.description-card-header p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  unicode-bidi: isolate;
}

.description-card-body {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  color: rgb(17 17 17 / 75%);
  padding: 56px 95px 20px;
}

.description-card-body h5 {
  font-family: PingFangSC-Semibold, sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  color: #111;
  margin-bottom: 20px;
}

.description-card-body p {
  margin-bottom: 6px;
}

.text-content {
  margin-bottom: 45px;
}

@media screen and (max-width: 1600px) {
  .description-card {
    max-width: calc(100% - 96px);
    max-height: 100vh;
    min-height: 0;
    overflow: auto;
  }

  .close {
    width: 20px;
    height: 20px;
    top: 16px;
    right: 16px;
  }

  .description-card-header {
    height: auto;
    padding: 32px 24px 28px;
    font-size: 14px;
  }

  .description-card-header h4 {
    font-size: 28px;
    line-height: 1.2;
  }
  .description-card-body {
    padding: 32px 24px 0;
    font-size: 14px;
    line-height: 22px;
  }
  .description-card-body h5 {
    font-size: 20px;
  }
}

@media screen and (max-width: 950px){
  .description-card {
    max-width: calc(100% - 96px);
  }
}
</style>
