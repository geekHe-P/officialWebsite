<script setup>
import TextCascade from '@/components/TextCascade.vue'
import CommentCard from '@/components/CommentCard.vue'

import UserOneImg from '@/assets/images/User-1.png'
import UserTwoImg from '@/assets/images/User-2.png'
import UserThreeImg from '@/assets/images/User-3.png'

const data = [
  {
    title: '#同事都是怎么样的人？',
    content: '公司同事基本都是 985、211 高校毕业的，并且很多都有硕士学位，年轻人居多，女生多，好看的小姐姐也多，是一个智商值和颜值都很高的公司。',
    authorName: 'Annie Liu - 产品经理',
    authorAvatar: UserOneImg
  },
  {
    title: '#有什么好福利？',
    content: '老板非常尊重大家的想法和意愿，也很鼓励大家提出新的建议，也非常关心大家的生活质量，为了让大家不挤地铁鼓励大家搬到公司附近住，并每个月给予住房补贴。总的来说，在这里工作心情愉悦，非常推荐大家来这里工作！',
    authorName: 'Tina - 编辑',
    authorAvatar: UserThreeImg
  },
  {
    title: '#工作环境怎么样？',
    content: '公司最宝贵的是非常好的工作氛围，大家相处得非常愉快沟通也很顺畅。工作的强度不大，不需要加班，这一点在xx真的很难得。上下班是弹性工作时间，非常自由。每天都有新鲜供应的水果提供给大家，零食也是源源不断。',
    authorName: 'Selena - 行政',
    authorAvatar: UserTwoImg
  }
]
</script>

<template>
  <div class="comments-container" id="xxxxx-comments">
    <div class="main-container">
      <text-cascade back-text="Comments" front-text="同事印象" align="mid"/>
      <ul class="comments-list">
        <li v-for="(item, index) in data" :key="index">
          <comment-card :title="item.title" :content="item.content" :authorName="item.authorName" :authorAvatar="item.authorAvatar"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.comments-list {
  margin-right: -24px;
  font-size: 0;
}

.comments-list li {
  width: 33.3333%;
  height: 100%;
  padding-right: 24px;
  box-sizing: border-box;
  display: inline-block;
}
@media screen and (max-width: 600px){
  .comments-list li {
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
