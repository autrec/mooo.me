export const state = () => ({
  listData: [],
  post: {}
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
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  getListData(context,param){
    context.commit('setListData',param)
  }
}