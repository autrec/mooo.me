export const state = () => ({
  listData: [],
  post: {},
  current: ['setting:2'],
  anchors: [],
  per_page: 10

})

export const mutations = {
  setListData (state, text) {
    for (let i = 0; i < 23; i++) {
      state.listData.push({
        href: 'https://www.antdv.com/',
        title: `ant design vue part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      })
    }
  },
  setCurren (state, text) {
    state.current = [text]
  },
  setAnchors (state, text) {
    state.anchors = text
  },

}

export const actions = {
  getListData(context,param){
    context.commit('setListData',param)
  },
  setCurren(context, param){
    var text = "mail"
    if(param == '/'){
      text = 'mail'
    }else if(param == 'about'){
      text = 'copyright'
    }else if(param == 'blockchain'){
      text = 'tag:1'
    }
    context.commit("setCurren", text)
  },
  setAnchors (context,param) {

    context.commit("setAnchors", param)
  }
}