<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="grow-card-container">
    <img :src="props.src" alt="" />
    <h4 class="title">
      {{ props.title }}
    </h4>
    <p class="detail">
      {{ props.detail }}
    </p>
  </div>
</template>

<style scoped>
.grow-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.grow-card-container:hover {
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
}

.title {
  font-family: PingFangSC-Semibold, sans-serif;
  font-size: 32px;
  line-height: 1;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 36px 0 24px;
}

.detail {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #333;
  opacity: 0.75;
  text-align: center;
  padding: 0 48px 48px;
  box-sizing: border-box;
}

.grow-card-container img {
  width: 100%;
  object-fit: contain;
}

@media screen and (max-width: 1300px){
  .title {
    font-size: 20px;
  }
  .detail {
    font-size: 14px;
    padding: 0 24px 36px;
  }
}

</style>
