<script setup>
import TextCascade from '@/components/TextCascade.vue'
import rightImg from '@/assets/images/product-1.png'
import blockImg from '@/assets/images/BG-1.png'

import UnitedStatesIcon from '@/assets/images/icon/united-states-of-america.svg'
import JapanIcon from '@/assets/images/icon/japan.svg'
import GermanyIcon from '@/assets/images/icon/germany.svg'
import franceIcon from '@/assets/images/icon/france.svg'
import SpainIcon from '@/assets/images/icon/spain.svg'
import IndiaIcon from '@/assets/images/icon/india.svg'
import UnitedKingDomIcon from '@/assets/images/icon/united-kingdom.svg'
</script>

<template>
  <div class="product-container" id="xxxxx-product">
    <div class="main-container">
      <div class="index-container">
        <div class="index-left">
          <TextCascade front-text="xxxxx 业务" back-text="Products" text-color="#fff" back-color="#2e3444" align="left"/>
          <div class="text-bold">我们的业务主要集中在 online publishing 领域，且一直保持着强劲的增长势头，正在逐步成为该行业的佼佼者。</div>
          <div class="text-desc">我们服务的用户主要来自英语言国家，也有日语、德语、法语、西班牙语等小语种国家。 从萌宠到料理、从旅行到黑科技，我们已经打造出了涵盖不同领域、涉及不同语种的十几个主流网站，每天的用户访问量都在数百万级别。</div>
          <ul class="languages-icon">
            <li><img :src="UnitedStatesIcon" alt=""></li>
            <li><img :src="JapanIcon" alt=""></li>
            <li><img :src="GermanyIcon" alt=""></li>
            <li><img :src="franceIcon" alt=""></li>
            <li><img :src="SpainIcon" alt=""></li>
            <li><img :src="IndiaIcon" alt=""></li>
            <li><img :src="UnitedKingDomIcon" alt=""></li>
            <li class="last">More than 10+ languages</li>
          </ul>
        </div>
        <div class="index-right">
          <img :src="blockImg" alt="" class="block-img">
          <img :src="rightImg" alt="" class="right-img">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-container {
  margin-bottom: 170px;
  background-color: #242a3a;
  padding: 105px 0 124px;
  height: 436px;
}

.index-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text-bold, .text-desc {
  color: #fff;
}

.languages-icon {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.languages-icon li {
  margin-right: 16px;
  font-size: 0;
}

.languages-icon li:last-child {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0;
  list-style: none;
  color: rgb(255 255 255 / 50%);
  position: relative;
}

.languages-icon li:last-child:before {
  content: '';
  display: block;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #242a3a 100%);
  width: 92px;
  height: 40px;
  position: absolute;
  top: 0;
  left: -108px;
}

.languages-icon li img {
  width: 40px;
  height: 40px;
}

.index-right {
  z-index: 1;
}

.block-img {
  width: 142px;
  height: 140px;
  position: absolute;
  top: -40px;
  right: -56px;
  z-index: -1;
}

.right-img {
  width: 100%;
}

@media screen and (max-width: 1600px){
  .block-img {
    right: 0
  }
}

@media screen and (max-width: 1300px){
  .product-container {
    margin-bottom: 0;
    height: auto;
  }

  .languages-icon {
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .languages-icon img {
    width: 38px;
    height: 38px;
  }

  .languages-icon .last {
    width: 100%;
    flex: 0 0 100%;
    margin: 20px 0 0;
    line-height: 1;
  }

  .index-right {
    width: 42%;
    height: auto;
  }
}

@media screen and (max-width: 950px) {
  .product-container {
    padding: 64px 0;
    background: linear-gradient(to bottom, #242a3a 70%, #fff 50px);
  }
  .index-container {
    flex-direction: column;
  }
  .block-img {
    display: none;
  }
  .languages-icon {
    margin-bottom: 46px
  }
  .index-right {
    width: 100%;
    position: static;
  }
}
@media screen and (max-width: 600px){
  .languages-icon li {
    margin-right: 8px;
  }
  .languages-icon img {
    width: 32px;
    height: 32px;
  }
}
</style>
