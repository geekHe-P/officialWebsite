<script setup>
// import logoImg from '@/assets/images/LOGO-1.png'
import logoImg from '@/assets/images/logo.png'
import { ref } from 'vue'
import IconMenu from '@/assets/images/icon/menu.svg'
import IconClose from '@/assets/images/icon/close-2.svg'

const navBar = ref(null)
const navMobBg = ref(null)
const menuImg = ref(null)
const close = ref(null)

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // clickClose()
}

const clickMenu = () => {
  navMobBg.value.style.display = 'block'
  menuImg.value.style.display = 'none'
  close.value.style.display = 'block'
}

const clickClose = () => {
  navMobBg.value.style.display = 'none'
  menuImg.value.style.display = 'block'
  close.value.style.display = 'none'
}

</script>

<template>
  <div class="home-container">
    <div class="main-container">
      <div class="top-container">
        <img class="logo" :src="logoImg" alt="">
        <div class="desktop-nav">
          <nav class="navbar">
            <a @click.prevent="scrollToSection('xxxxx-team')" class="nav-item">xxxxx 团队</a>
            <a @click.prevent="scrollToSection('xxxxx-product')" class="nav-item">xxxxx 业务</a>
            <a @click.prevent="scrollToSection('xxxxx-culture')" class="nav-item">xxxxx 文化</a>
            <a @click.prevent="scrollToSection('xxxxx-grow')" class="nav-item">xxxxx 成长</a>
            <a @click.prevent="scrollToSection('xxxxx-job')" class="nav-item">xxxxx 招募</a>
            <a @click.prevent="scrollToSection('xxxxx-comments')" class="nav-item">xxxxx 印象</a>
          </nav>
        </div>
        <!--        手机端菜单图标       -->
        <div class="menu-container" @click="clickMenu">
          <img ref="menuImg" class="menu" :src="IconMenu" alt=""/>
        </div>
      </div>
      <div class="mob-nav-container">
        <!--       白色背景      -->
        <div ref="navMobBg" class="nav-mob-bg">
          <img ref="close" class="close" :src="IconClose" alt="" @click="clickClose">
          <nav ref="navBar" class="navbar">
            <a @click.prevent="scrollToSection('xxxxx-team')" class="nav-item">xxxxx 团队</a>
            <a @click.prevent="scrollToSection('xxxxx-product')" class="nav-item">xxxxx 业务</a>
            <a @click.prevent="scrollToSection('xxxxx-culture')" class="nav-item">xxxxx 文化</a>
            <a @click.prevent="scrollToSection('xxxxx-grow')" class="nav-item">xxxxx 成长</a>
            <a @click.prevent="scrollToSection('xxxxx-job')" class="nav-item">xxxxx 招募</a>
            <a @click.prevent="scrollToSection('xxxxx-comments')" class="nav-item">xxxxx 印象</a>
          </nav>
        </div>
      </div>
      <div class="text-container">
        <p class="slogn">深耕网络 · 通达全球</p>
        <h1><b>Xxx</b> Here and <br><b>Xx</b> Everywhere</h1>
        <div class="btn">
          <a @click.prevent="scrollToSection('xxxxx-job')">简历投递</a>
          <a @click.prevent="scrollToSection('xxxxx-team')">了解我们</a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.home-container {
  position: relative;
  background: url('@/assets/images/top-banner.png') no-repeat center;
  height: 740px;
  object-fit: contain;
}

.home-container::before {
  position: absolute;
  background: url('@/assets/images/Left.png') no-repeat;
  content: '';
  display: inline-block;
  width: 174px;
  height: 410px;
  background-size: contain;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.home-container::after {
  content: '';
  display: inline-block;
  width: 150px;
  height: 424px;
  background: url('@/assets/images/Right.png') no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

.top-container {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 120px;
  object-fit: contain;
  height: 64px;
}

.mob-nav-container {
  display: none;
}

.desktop-nav {
  display: block;
  z-index: 1500;
}

.menu-container {
  display: none;
}

.close {
  display: none;
}

.navbar {
  margin-left: auto;
  z-index: 1;
}

.navbar a {
  cursor: pointer;
  transition: text-shadow 0.3s ease;
}

.navbar a:hover {
  text-shadow: 0 0 32px rgb(0, 0, 0, 0.3);
  transition: text-shadow 0.3s ease;
}

.nav-item {
  position: relative;
  margin-left: 69px;
  font-family: PingFangSC-Medium, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 64px;
  color: #fff;
  text-decoration: none;
}

.nav-item::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  opacity: 0.75;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
}

.nav-item:hover:after {
  background-color: #fff;
}

.text-container {
  width: 550px;
  position: absolute;
  bottom: 200px;
}

.text-container h1 {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 76px;
  font-weight: 400;
  line-height: 90px;
  color: #fff;
  text-shadow: 2px 2px 12px rgb(0 0 0 / 29%);
  margin: 30px 0 36px;
}

.text-container h1 b {
  font-weight: 700;
}

.text-container a {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 56px;
  color: #fff;
  display: inline-block;
  width: 200px;
  text-align: center;
  margin-right: 26px;
  border-radius: 2px;
  border: solid 1px #fff;
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}


.btn a:first-child {
  color: #2158ee;
}

.btn a:first-child {
  background-color: #fff;
}

.btn a:hover {
  box-shadow: 0 0 32px 0 rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.3s ease;
}

.slogn {
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #fff;
}

@media screen and (max-width: 1300px) {
  .nav-item {
    margin-left: 36px;
  }

  .home-container:after {
    display: none;
  }

  .home-container {
    padding: 0;
  }

}

@media screen and (max-width: 950px) {
  .logo {
    width: 98px;
    height: 56px;
    top: 0;
  }

  .menu-container {
    display: block;
    width: 22px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 16px;
  }

  .menu {
    display: block;
  }
  .desktop-nav {
    display: none;
  }

  .mob-nav-container {
    width: 100%;
    display: block;
  }

 .nav-mob-bg {
   width: 100%;
    transform: translateX(-24px);
    background: #fff;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding-bottom: 24px;
    position: absolute;
    top: 0;
    display: none;
  }
  .navbar {
    width: 100%;
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 61.5px;
  }

  .close {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
  }

  .nav-item {
    font-size: 18px;
    line-height: 28px;
    color: #111;
    margin-left: 0;
    margin-top: 16px;
  }
  .nav-item:hover:after {
    background-color: #2158ee;
  }
  .main-container {
    padding: 0 24px
  }
  .home-container {
    background: url(@/assets/images/Mobile-banner.png) no-repeat;
    height: 600px;
    background-size: 100%;
    background-color: #174bd8;
  }
  .home-container::after {
    display: block;
    width: 92px;
    height: 255px;
    bottom: 0;
    top: auto;
  }
  .home-container::before {
    width: 92px;
    height: 255px;
    bottom: 58px;
  }
  .text-container {
    width: 100%;
    bottom: 40px;
    margin-left: -24px;
    text-align: center;
    z-index: 1;
  }
  .text-container h1 {
    font-size: 48px;
    line-height: 58px;
    margin: 16px auto 24px;
    width: 338px;
    text-align: left;
  }
  .btn a {
    margin: 0 8px;
  }
  .text-container:before {
    width: 92px;
    height: 255px;
    bottom: 58px;
  }
  .text-container:after {
    display: block;
    width: 92px;
    height: 255px;
    bottom: 0;
    top: auto;
  }
}

@media screen and (max-width: 600px){
  .text-container h1 {
    font-size: 42px;
    line-height: 52px;
    width: 300px;
  }
  .btn a {
    width: 140px;
    font-size: 16px;
    line-height: 48px;
  }
}

@media screen and (max-width: 360px) {
  .text-container h1 {
    font-size: 40px;
    line-height: 50px;
  }
}
</style>
