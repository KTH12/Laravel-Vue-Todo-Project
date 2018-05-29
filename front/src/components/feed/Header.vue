<template>
  <div id="c-header" >
    <span class="title">{{ getTitle }}</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
  computed: {
    ...mapGetters(
      {
        getTitle: 'getTitle',
      },
    ),
  },
};
</script>
<style lang="scss">
@import "styles/_global.scss";
#c-header{
  height: 130px;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background: url("../../assets/bg4.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  .title{
    display: flex;
    align-items: flex-end;
    flex: 1;
    font-size: 35px;
    font-weight: bold;
  }
}
</style>
