<template>
  <div>
    <a-layout>
      <Header />
      <a-layout class="main-width main-content">
        <a-layout-content>
          <div class="content-head">
            <h1>{{pageData.title.rendered}}</h1>
          </div>
          <div v-html="pageData.content.rendered"></div>
        </a-layout-content>
        <a-layout-sider theme="light" width="260">
          <Footer />
          <Anchor />
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Anchor from '@/components/Anchor.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Anchor,
    Footer
  },
  data() {
    return {
      pageData: {},
      temp: {},
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    }
  },
  computed: {
    listData2 () {
      return this.$store.state.listData
    }
  },
  methods: {
    getData(){
      //this.$store.dispatch("getListData","1")
      //console.log(this.$route.params)
    }
  },
  mounted: function(){
    this.getData()
  },
  async asyncData ({store, route, $axios, params, payload }) {
    var res = payload
    store.dispatch("setCurren", 'about')
    if(!payload){
      var data = await $axios.$get(`/pages/4453`)
      res = data
    }
    return {pageData: res }
  }
}
</script>
<style> 
.main-content{
  background: #f0f2f5;
  margin: 10px auto 20px;
}
.ant-layout-content{
  min-height: 500px;
  padding: 0 20px;
  margin-right: 10px;
}
.a-layout-sider{
  background: #fff;
}
.content-head{
  margin-top: 10px;
  margin-bottom: 10px;
}
.content-head h1{
  margin-bottom: 0px;
}
@media (max-width: 940px){
  .ant-layout-sider{
    display: none;
  }
}
</style>
