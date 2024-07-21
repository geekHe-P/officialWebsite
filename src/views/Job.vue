<script setup>
import TextCascade from '@/components/TextCascade.vue'
import { computed, ref } from 'vue'
import { FullTimeJobData, InternData } from '@/assets/jobData.js'
import JobCard from '@/components/JobCard.vue'

const activeJob = ref('full-time')

const setActiveJob = (job) => {
  activeJob.value = job
}

const activeLeft = computed(() => activeJob.value === 'full-time' ? '4px' : "calc(50% - 4px)")

</script>

<template>
  <div class="job-container" id="xxxxx-job">
    <div class="main-container">
      <text-cascade back-text="Recruiting" front-text="xxxxx 招募" back-color="#f1f3f7" align="mid"/>
      <div class="job-change">
        <div class="job-left"
             :class="{ active: activeJob === 'full-time' }"
             @click="setActiveJob('full-time')"
        >全职岗位 (社招/校招)</div>
        <div class="job-right"
             :class="{ active: activeJob === 'intern' }"
             @click="setActiveJob('intern')"
        >实习岗位</div>
        <div class="job-change-bg" :style="{left: activeLeft}"></div>
      </div>
      <transition name="slide-fade" mode="out-in">
        <div v-if="activeJob === 'full-time'" class="job-item-container full-time">
          <ul>
            <li v-for="(item, index) in FullTimeJobData" :key="index" class="job-item">
              <job-card
                :title="item.title"
                :english-title="item.englishTitle"
                :channel="item.channel"
                :job-details="item.jobDetails"
                :requirements="item.requirements" />
            </li>
          </ul>
        </div>
        <div v-else class="job-item-container intern">
          <ul>
            <li v-for="(item, index) in InternData" :key="index" class="job-item">
              <job-card
                :title="item.title"
                :english-title="item.englishTitle"
                :channel="item.channel"
                :job-details="item.jobDetails"
                :requirements="item.requirements"
                :notice="item.notice"/>
            </li>
          </ul>
        </div>
      </transition>

    </div>
  </div>
</template>

<style scoped>
.job-container {
  padding: 96px 0 128px 0;
  background-color: #fafafa;
}

.job-change {
  position: relative;
  width: 568px;
  height: 64px;
  background-color: #e8ebf1;
  border-radius: 32px;
  padding: 4px;
  font-size: 0;
  box-sizing: border-box;
  margin: 0 auto;
  z-index: 1;

}

.job-change-bg {
  position: absolute;
  left: calc(50% - 32px);
  width: 50%;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: 28px;
  background: #2158ee;
  transition: left 0.3s ease;
  z-index: -1;
}

.job-change div {
  width: 50%;
  display: inline-block;
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 56px;
  color: rgb(36 42 58 / 50%);
  text-align: center;
  border-radius: 28px;
  cursor: pointer;
  transition: color 0.3s ease, left 0.3s ease;
}

.job-item-container ul {
  margin-top: 60px;
  margin-right: -32px;
  font-size: 0;
}

.job-item-container li {
  padding-right: 32px;
  padding-bottom: 32px;
  display: inline-block;
  width: 33.33333%;
  box-sizing: border-box;
}

.job-left.active, .job-right.active {
  color: #ffffff;
  transition: color 0.3s ease;
}


 /* job item 动效 */
.intern.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.intern.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.intern.slide-fade-enter-from,
.intern.slide-fade-leave-to {
  transform: translateX(25px);
  opacity: 0;
}

.full-time.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.full-time.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.full-time.slide-fade-enter-from,
.full-time.slide-fade-leave-to {
  transform: translateX(-25px);
  opacity: 0;
}

@media screen and (max-width: 1300px){
  .job-change {
    height: 52px;
  }
  .job-change-bg {
    height: 44px;
  }
  .job-left, .job-right {
    height: 44px;
    line-height: 44px !important;
    font-size: 16px;
  }

  .job-item-container ul {
    margin-top: 32px;
    margin-right: -16px;
  }

  .job-item-container li {
    padding-right: 16px;
    padding-bottom: 16px;
  }

}
@media screen and (max-width: 950px){
  .job-item-container li {
    width: 50%;
  }
}
@media screen and (max-width: 600px){
  .job-change {
    width: 100%;
  }
  .job-item-container li {
    width: 100%
  }
}
</style>
