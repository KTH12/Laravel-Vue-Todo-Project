const state = {
  todos: [],
  currentTodo: {
    index: 0,
    todoList: [],
  },
};

const getters = {
  getTodos($state) {
    return $state.todos;
  },
  getCurrentTodo($state) {
    return $state.currentTodo;
  },
  getTitle($state) {
    const index = $state.currentTodo.index;
    if ($state.todos.length === 0) {
      return 'loading...';
    }
    return $state.todos[index].title;
  },
};

const actions = {
  asyncInitGetGroups(context) {
    window.$http.get(window.API.getUserToTodoGroups, {})
      .then((response) => {
        context.commit('setTodoGroups', { datas: response.data });
        return true;
      });
  },
  asyncGroupUpdate(context, { $index, $title }) {
    window.$http.put(window.API.updateTodoGroup, {
      id: context.state.todos[$index].id,
      title: $title,
    })
      .then((response) => {
        context.commit('setTitle', {
          $ind: $index,
          $title: response.data.title,
        });
        return true;
      });
  },
  asyncSetTodoDetail(context, { $index }) {
    window.$http.get(`${window.API.getTodoDetailList}/${context.state.todos[$index].id}`, {})
      .then((response) => {
        context.commit('setTodoDetail', {
          $ind: $index,
          $datas: response.data,
        });
        return true;
      });
  },
  selectTodo(context) {
    // commit 의 대상인 selectTodo 는 mutations 의 메서드를 의미한다.
    return context.commit('selectTodo');
  },
};

// mutations
const mutations = {
  setTodos($state, $payload) {
    $state.todos[$payload.index].title = $payload.value;
    return $state.todos;
  },
  setMoveTodos($state, $payload) {
    $state.todos = $payload;
    return $state.todos;
  },
  setModify($state, $payload) {
    if ($state.todos[$payload].isModify === undefined) {
      $state.todos[$payload].isModify = false;
    }
    $state.todos[$payload].isModify = !$state.todos[$payload].isModify;
    return $state.todos;
  },
  setTitle($state, { $ind, $title }) {
    const todo = $state.todos[$ind];
    todo.isModify = false;
    todo.title = $title;
  },
  delTodo($state, { $index }) {
    $state.todos.splice($index, 1);
  },
  selectTodo($state, { $index, $datas }) {
    $state.currentTodo.index = $index;
    $state.currentTodo.datas = $datas;
  },
  setTodoGroups($state, { datas }) {
    const list = datas;
    for (const prop in datas) {
      if (Object.prototype.hasOwnProperty.call(datas, prop)) {
        datas[prop].isModify = false;
        list[prop] = datas[prop];
      }
    }
    $state.todos = list;
  },
  setTodoDetail($state, { $ind, $datas }) {
    $state.currentTodo.index = $ind;
    $state.currentTodo.todoList = $datas;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
