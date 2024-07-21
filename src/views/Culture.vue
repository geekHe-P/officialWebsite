<script setup>
import CultureImage from '@/assets/images/values.png'
import TextCascade from '@/components/TextCascade.vue'
</script>

<template>
  <div class="culture-container" id="xxxxx-culture">
    <div class="main-container index-container">
        <div class="index-left">
          <img :src="CultureImage" alt="">
        </div>
        <div class="index-right">
          <text-cascade back-text="Culture" front-text="xxxxx 文化"></text-cascade>
          <div class="text-content">
            <p class="text-bold">许用户以有爱的服务</p>
            <p class="text-desc">我们致力于打造有质、有趣、且有爱的世界性互联网产品，帮助全球用户解决日常及非日常生活中的各种问题。让每个人都能享受信息便捷的乐趣，是我们的愿景。</p>
            <p class="text-bold">许办公以优越的环境</p>
            <p class="text-desc">公司位于 CBD 核心商务区，交通便利，有多语种的工作环境和接触全球前沿一手信息的平台；配备先进的办公和休闲设施，如全员 iMac & MacBook、人体工学升降桌椅，午休懒人沙发等；有灵活化、人性化的办公方式，弹性上班时间，周末双休，不加班。</p>
            <p class="text-bold">许员工以亲和的氛围</p>
            <p class="text-desc">鼓励和尊重是我们对每位成员的基本态度，平等和包容是我们对每位同事的基本立场，“美美与共，和而不同”是我们引以为傲的办公氛围；“你今天工作得开心么？”永远是老板最关心的问题。</p>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

.culture-container {
  padding-top: 160px;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text-content .text-bold {
  margin: 24px 0;
}

.text-content .text-bold:first-child {
  margin-left: 0;
}

.index-left img {
  width: 100%;
  object-fit: cover;
}

.index-left {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 950px) {
  .index-container {
    flex-direction: column-reverse;
  }
}
</style>
