<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorAvatar: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="comment-card-container">
    <h5>
      {{ props.title }}
    </h5>
    <p>
      {{ props.content }}
    </p>
    <div class="comment-row">
      <img :src="props.authorAvatar" alt="">
      <div class="author-name">
        {{ props.authorName }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment-card-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  padding: 48px 32px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
}

.comment-card-container:hover {
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
}

.comment-card-container h5 {
  font-family: PingFangSC-Semibold, sans-serif;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
  position: relative;
}

.comment-card-container h5:after {
  content: '”';
  font-family: HYYaKuHei, sans-serif;
  display: inline-block;
  font-size: 60px;
  color: #222;
  opacity: 0.15;
  position: absolute;
  right: -16px;
  top: -10px;
  line-height: 1.2;
  font-weight: 600;
}

.comment-card-container p {
  height: 130px;
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #333;
  margin-bottom: 24px;
}

.comment-card-container img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
}

.author-name {
  font-family: PingFangSC-Regular, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #111;
  opacity: 0.75;
}

.comment-row {
  display: flex;
  justify-content: start;
  align-items: center;
}

@media screen and (max-width: 1300px){
  .comment-card-container {
    padding: 36px 24px;
  }
  .comment-card-container h5 {
    font-size: 16px;
    height: 40px;
  }
  .comment-card-container p {
    height: 258px;
    font-size: 14px;
    line-height: 22px;
  }
  .comment-row {
    height: 68px;
  }
}
@media screen and (max-width: 600px){
  .comment-card-container p {
    height: auto
  }
}
</style>
