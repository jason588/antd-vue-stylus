<template>
  <div class="cell-card" :style="{height:`${height}px`}">
    <div class="card-head" v-if="title && !hideHead">
      <div class="title">
        <i class="icon" :class="icon" v-if="icon"></i>
        <h4>{{title}}</h4>
      </div>
      <router-link :to="morLink" v-if="morLink" class="more">{{moreText || '更多'}}</router-link>
    </div>
    <div class="card-body" :class="bodyClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    morLink:[String,Object],
    height:[String,Number],
    moreText:String,
    icon:String,
    bodyClass:String,
    padding:{
      type: Boolean,
      default:true
    },
    hideHead:{
      type: Boolean,
      default:false
    }
  },
  components:{

  },
  data(){
    return{

    }
  },
  methods:{

  },
  created(){

  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/base'
.cell-card
  background-color: #fff
  border-radius: 3px
  box-shadow: 0 3px 10px rgba(#000,.03)
  display: flex
  flex-direction: column;
  .card-head
    display: flex;
    align-items: center;
    padding: 0 $spacer
    height: 48px
    .title
      flex: 1
      overflow: hidden;
      display: flex
      align-items: center;
      .icon
        color: $primary
        font-size: 24px
        margin-right: 8px
        line-height: 1
      h4
        font-size: 16px
        color: $grey-dark
        margin: 0
        flex: 1
    .more
      color: $grey-light
      font-size: 12px
  .card-body
    flex: 1
    overflow: hidden;


</style>
