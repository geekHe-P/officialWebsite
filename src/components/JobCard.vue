<script setup>
import Ads from '@/assets/images/icon/ads.svg'
import BianJi from '@/assets/images/icon/bianji.svg'
import ChanPin from '@/assets/images/icon/chanpin.svg'
import DaiMa from '@/assets/images/icon/daima.svg'
import SheJi from '@/assets/images/icon/sheji.svg'
import { ref } from 'vue'
import { state } from '@/stores/index.js'
import JobDescriptionCard from '@/components/JobDescriptionCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  englishTitle: {
    type: String,
    required: true,
  },
  channel: {
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

const imgUrl = ref()
const isShow = ref(false)
const stateStore = state()

const checkDetail = () => {
  stateStore.setIsDialog(true)
  isShow.value = true
}

switch (props.channel) {
  case 'ads': imgUrl.value = Ads; break;
  case 'bianji': imgUrl.value = BianJi; break;
  case 'chanpin': imgUrl.value = ChanPin; break;
  case 'daima': imgUrl.value = DaiMa; break;
  case 'sheji': imgUrl.value = SheJi; break;
  default: break;
}
</script>

<template>
  <div @click="checkDetail" class="job-card-container">
      <div class="job-card-left">
        <h4>
          {{ title }}
        </h4>
        <p class="check-job">
          查看岗位 >
        </p>
      </div>
      <div class="job-card-right">
        <img :src="imgUrl" alt="" />
      </div>
  </div>
  <job-description-card class="job-card-dialog" :is-show="isShow" :title :english-title :job-details :requirements @closeDialog="isShow = $event" :notice/>
</template>

<style scoped>
.job-card-container {
  height: 148px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.04);
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

}

.job-card-left h4 {
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  color: #111;
}

.check-job {
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #2158ee;
  position: absolute;
  bottom: 32px;
}

.job-card-right img {
  width: 48px;
  height: 42px;
}

.job-card-container:hover {
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

@media screen and (max-width: 1300px){
  .job-card-container {
    padding: 24px;
    height: 116px;
  }

  .job-card-left h4 {
    font-size: 20px;
  }
}

</style>
