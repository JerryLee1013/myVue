export default {
  totalCount (state) {
    return state.todos.length
  },
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  isAllCheck (state, getters) {
    return getters.completeCount === getters.totalCount && getters.completeCount > 0
  }
}
