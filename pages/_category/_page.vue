<template>
  <div>
    <a-layout>
      <Header />
      <a-layout class="main-width main-content">
        <a-layout-content>
          <a-list itemLayout="vertical" size="large" :dataSource="listData">
            <div slot="footer"><a-button @click="nextPage">下一页</a-button></div>
            <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
              <template slot="actions" v-for="{type, text} in actions">
                <span :key="type">
                  <a-icon :type="type" style="margin-right: 8px" />
                  {{text}}
                </span>
              </template>
              <img
                slot="extra"
                width="180"
                height="120"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <a-list-item-meta>
                <nuxt-link slot="title" :to="'post/'+item.id">{{item.title.rendered}}</nuxt-link>
              </a-list-item-meta>
              <div v-html=item.excerpt.rendered></div>
            </a-list-item>
          </a-list>
        </a-layout-content>
        <a-layout-sider theme="light" width="260">
          <a-card hoverable style="width: 260px">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description"
                >www.instagram.com </template>
            </a-card-meta>
          </a-card>
          <a-card title="Card title" :bordered="false" style="width: 260px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
          <Footer />
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 6,
      },
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
      this.$store.dispatch("getListData","1")
    },
    nextPage(){
      var page = this.$route.params.page || 1
      var category = this.$route.params.category
      if(category){
        this.$router.push(`/${category}/${parseInt(page)+1}`)
      }else{
        this.$router.push(`/page/${parseInt(page)+1}`)
      }
      
    }
  },
  mounted: function(){
    //this.getData()
  },
  async asyncData (context) {
    context.store.dispatch("setCurren", "/")
    var page = context.params.page || 1
    var category = context.params.category
    var url = `/posts?page=${parseInt(page)}&per_page=${context.store.state.per_page}`
    if(category == 'page'){
    }else if(category == 'blockchain'){
      url += `&categories=1621`
    }
    const data = await context.$axios.$get(url)
    return { listData: data }
  }
}
</script>
<style> 
.main-content{
  background: #f0f2f5;
  margin: 10px auto 20px;
}
.ant-layout-content{
  background: #fff;
  min-height: 500px;
  padding: 0 20px;
  margin-right: 10px;
}
.ant-layout-sider{
  background: #f0f2f5;
}
.ant-list-vertical .ant-list-item-meta {
    margin-bottom: 0px;
}
.ant-list-vertical .ant-list-item-extra {
  margin-left: 20px;
}
</style>
