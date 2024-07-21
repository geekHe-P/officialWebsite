<script setup>
import TextCascade from '@/components/TextCascade.vue'
import GrowCard from '@/components/GrowCard.vue'

import JobImg from '@/assets/images/job.jpg'
import TwoImg from '@/assets/images/013-职业培训.png'
import ThreeImg from '@/assets/images/014-读书俱乐部.png'

const cardData = [
  {
    src: JobImg,
    title: '职业晋升体系',
    detail: '我们有极具竞争力的薪资福利体系和完善的职业晋升体系，每年有两次奖金评定和职位晋升的机会，另有其他项目奖，来匹配你对团队的贡献，还有令人内人惊喜、外人艳羡的福利待遇。'
  },
  {
    src: TwoImg,
    title: '定期系统培训',
    detail: '我们定期为员工提供具有针对性和差异化的内部及外部培训。我们有读书俱乐部，定期为大家推荐并采购干货满满的书籍，也提供预算，鼓励大家参与线上或线下的培训课程。'
  },
  {
    src: ThreeImg,
    title: '鼓励自由探索',
    detail: '我们非常鼓励你自由探索自己的兴趣，提出自己的创意，也非常乐意将你有价值的创意落实成服务用户的产品，并让你的产品走向世界，全方位满足你追求自我发展和实现职场进阶的诉求。'
  }
]
</script>

<template>
  <div class="grow-container" id="xxxxx-grow">
    <div class="main-container">
      <text-cascade back-text="Growth" front-text="xxxxx 成长" align="mid"/>
      <ul class="grow-card-list">
        <li v-for="(item, index) in cardData" :key="index">
          <grow-card :title="item.title" :detail="item.detail" :src="item.src" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.grow-container {
  padding: 160px 0;
}

.grow-card-list {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.grow-card-list li {
  width: 33.3333%;
  padding-right: 24px;
  box-sizing: border-box;
  display: inline-block;
}

.grow-card-list li:last-child {
  padding-right: 0;
}

@media screen and (max-width: 1300px){
  .grow-card-list {
    margin-right: -16px;
  }
}

@media screen and (max-width: 600px) {
  .grow-card-list {
    flex-direction: column;
  }

  .grow-card-list li {
    width: 100%;
    margin-bottom: 16px;
    padding-right: 0;
  }
}
</style>
