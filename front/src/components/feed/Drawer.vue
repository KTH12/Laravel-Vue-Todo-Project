<template>
  <div id="c-drawer">
    <div class="drawer-head">
      <p class="make">make by kay</p>
      <p class="email">aogora2431@gmail.com</p>
    </div>
    <div class="todo-board">
      <div class="static-today todo-item">오늘 할일</div>
      <div class="todo-item"
        v-for="(todo, index) in getTodos"
        :key="todo.id"
        @click="itemSelect(index)"
      >
        <input
          :ref="'title_inp_' + index"
          v-bind:class="{ modify: todo.isModify }"
          class="todo-title"
          :index="index"
          :disabled="!todo.isModify"
          :value="todo.title"
          @input="updateTitle"
        >
        <div class="item-menu">
          <a v-if="todo.isModify" @click="modifyComp(index)">완료</a>
          <md-menu md-direction="bottom-start" :mdCloseOnClick="closeOnClick"
            :mdCloseOnSelect="closeOnSelect" v-if="!todo.isModify">
              <md-button class="md-icon-button" md-menu-trigger>
                <a class="fas fa-ellipsis-v c-icon" ></a>
              </md-button>
              <md-menu-content>
                <md-menu-item @click="itemDelete(index)">제거</md-menu-item>
                <md-menu-item @click="itemModify(index)">수정</md-menu-item>
              </md-menu-content>
            </md-menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import draggable from 'vuedraggable';
// ../../assets/baseline-more_vert-24px.svg

export default {
  components: {
    draggable,
  },
  data() {
    return {
      toggleCard: false,
      testText: 'test',
      data: '',
      closeOnClick: true,
      closeOnSelect: true,
    };
  },
  created() {
    this.asyncInitGetGroups();
  },
  methods: {
    ...mapActions({
      asyncInitGetGroups: 'asyncInitGetGroups',
      asyncGroupUpdate: 'asyncGroupUpdate',
      asyncSetTodoDetail: 'asyncSetTodoDetail',
    }),
    ...mapMutations({
      setTodos: 'setTodos',
      setMoveTodos: 'setMoveTodos',
      setModify: 'setModify',
      setTitle: 'setTitle',
      delTodo: 'delTodo',
    }),
    updateTitle(el) {
      this.setTodos({ index: el.target.attributes.index.value, value: el.target.value });
    },
    checkMove(evt) {
    },
    itemModify(index) {
      this.setModify(index);
      setTimeout(() => {
        this.$refs[`title_inp_${index}`][0].focus();
        return false;
      });
    },
    itemDelete(index) {
      this.delTodo({
        $index: index,
      });
    },
    modifyComp(i) {
      this.asyncGroupUpdate({
        asyncSetTodoDetail: 'asyncSetTodoDetail',
        $index: i,
        $title: this.$refs[`title_inp_${i}`][0].value,
      });
    },
    itemSelect($ind) {
      console.log(`itemSelect : ${$ind}`);
      this.asyncSetTodoDetail({
        $index: $ind,
      });
    },
  },
  computed: {
    ...mapGetters(
      {
        getTodos: 'getTodos',
      },
    ),
  },
};
</script>
<style lang="scss">
  @import "styles/_global.scss";
  #c-drawer{
    width: 260px;
    border-right: 1px solid $color_gray;
    .drawer-head{
      border-bottom: 1px solid $color_gray;
      .make{
        padding: 0.8rem 1.2rem 0rem 1.2rem;
        font-size: 0.9rem;
        color: $color_dark2;
      }
      .email{
        font-size: 1.2rem;
        padding: 1rem;
        color: $color_dark;
      }
    }
    .todo-board{
      .static-today{
        padding-left: 1rem;
      }
      .todo-item{
        display: flex;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.3rem;
        &:hover{
          background-color: $color_gray2;
        }
        &.active{
          font-weight: bold;
        }
        & > .todo-title{
          height: 100%;
          padding-left: 1rem;
          font-size: 1.1rem;
          border: 0rem;
          background-color: rgba(0,0,0,0);
          &.modify{
            background-color: white;
          }
        }

        .item-menu{
          flex: 1;
          text-align: center;
          .md-menu{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          .c-icon{
            color: $color_dark2;
          }
        }
      }
      .menu-icon{
        margin-top: 3px;
      }
    }
  }
  .todo-title-menu{
    .md-list{
      padding: 0px;
      .custom-item{
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        &:hover{
          background-color: $color_gray2;
        }
      }
    }
  }
</style>
