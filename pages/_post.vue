<template>
  <div>
    <a-layout>
      <Header />
      <a-layout class="main-width main-content">
        <a-layout-content>
          <div class="content-head">
            <h1>{{postData.title.rendered}}</h1>
            <span>{{postData.date}}</span>
          </div>
          <div v-html="postData.content.rendered"></div>
        </a-layout-content>
        <a-layout-sider theme="light">
          <a-layout-footer :style="{ textAlign: 'center' }">
            Ant Design ©2018 Created by Ant UED
          </a-layout-footer>
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
export default {
  components: {
    Header,
    Anchor
  },
  data() {
    return {
      postData: {},
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
  async asyncData ({store, route, params, payload }) {
    store.dispatch("setCurren", params.post)
    if(payload) return {postData: payload}
    const {data} = await axios.get(`https://zycao.com/wp-json/wp/v2/posts?per_page=1&slug=${params.post}`)
    var reg = /<h([2-6]).*?\>(.*?)<\/h[2-6]>/g
    data[0].content.rendered = data[0].content.rendered.replace(reg,(matched,c1,c2,c3,groups)=>{return '<h'+c1+' id="'+c2+'">'+c2+'</h'+c1+'>'})
    return {postData: data[0] }
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
