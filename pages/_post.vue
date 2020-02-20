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
    var res = payload
    store.dispatch("setCurren", params.post)
    if(!payload){
      const {data} = await axios.get(`https://zycao.com/wp-json/wp/v2/posts?per_page=1&slug=${params.post}`)
      res = data[0]
    }
    var anchors = []
    var reg = /<h([2-6]).*?\>(.*?)<\/h[2-6]>/g
    res.content.rendered = res.content.rendered.replace(reg,(matched,v1,v2,v3,groups)=>{
      //anchors.push({href:v1,title:v2})
      return '<h'+v1+' id="'+v2+'">'+v2+'</h'+v1+'>'
    })
    //store.dispatch("setAnchors",anchors)
    return {postData: res }
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
