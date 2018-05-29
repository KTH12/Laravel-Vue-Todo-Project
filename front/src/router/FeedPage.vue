<template>
  <div class="l-feed">
    <drawer-component></drawer-component>
    <content-component></content-component>
    <right-drawer-component></right-drawer-component>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Content from '@/components/feed/Content';
import Drawer from '@/components/feed/Drawer';
import RightDrawer from '@/components/feed/RightDrawer';

export default {
  components: {
    'content-component': Content,
    'drawer-component': Drawer,
    'right-drawer-component': RightDrawer,
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    ...mapActions({
      asyncSetTodoDetail: 'asyncSetTodoDetail',
    }),
  },
};
</script>

<style lang="css" >
  .l-feed {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
