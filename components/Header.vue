<template>
  <a-layout-header >
    <div class="main-width header-menu">
      <nuxt-link to="/" class="logo">logo</nuxt-link>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail">
          <nuxt-link to="/"><a-icon type="mail" />首页</nuxt-link>
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />标签</span
          >
          <a-menu-item key="setting:1">
            <nuxt-link to="/hyperledger-fabric-env">fabric</nuxt-link>
          </a-menu-item>
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
      
    }
  },
  computed: {
    current(){
      return this.$store.state.current
    }
  },
  methods: {
    setCurrent:function(){
      var path = this.$route.path
      if(path == "/"){
        //this.current = ['mail']
      }
    }
  },
  mounted: function(){
    this.setCurrent()
  }
}
</script>
<style scoped>
.ant-layout-header{
  background: #fff;
  padding: 0;
  height: 48px;
  line-height: 48px;
}
.header-menu{
  margin: 0 auto;
}
.logo {
  width: 60px;
  height: 40px;
  line-height: 40px;
  background: rgba(187, 47, 47, 0.2);
  margin: 4px 16px 4px 0;
  float: left;
}
@media (max-width: 940px){
  .ant-layout-header{
    padding: 0 20px;
  }
}

</style>
