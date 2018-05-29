<template>
  <div id="c-content" class="border-black">
    <header-component></header-component>
    <div class="todo-list">
      <div
        class="todo-item"
        v-for="(todo) in getCurrentTodo.todoList"
        :key="todo.id"
      >
        <md-checkbox v-model="boolean"></md-checkbox>
        <input
          class="content"
          :value="todo.content"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '@/components/feed/Header';

export default {
  components: {
    'header-component': Header,
  },
  data() {
    return {
      boolean: false,
    };
  },
  created() {
  },
  methods: {
  },
  computed: {
    ...mapGetters(
      {
        getCurrentTodo: 'getCurrentTodo',
      },
    ),
  },
};
</script>
<style lang="scss">
  @import "styles/_global.scss";
  #c-content{
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    color: $color_dark;
    .todo-list{
      .todo-item{
        display: flex;
        padding: 1rem;
        .content{
          flex: 1;
          line-height: 3rem;
          border: 0px;
          font-size: 1rem;
        }
      }
    }
  }
</style>
