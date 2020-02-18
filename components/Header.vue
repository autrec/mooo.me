<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="main-width header-menu">
      <div class="logo" />
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />Navigation Three - Submenu</span
          >
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a href="https://zycao.com" target="_blank" rel="noopener noreferrer"
            >About</a
          >
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    }
  }
}
</script>
<style scoped>
.ant-layout-header{
  background: #fff;
  height: 48px;
  line-height: 48px;
}
.header-menu{
  margin: 0 auto;
}
.logo {
  width: 120px;
  height: 40px;
  background: rgba(187, 47, 47, 0.2);
  margin: 4px 16px 4px 0;
  float: left;
}
</style>
