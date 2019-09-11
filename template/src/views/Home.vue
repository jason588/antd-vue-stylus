<template>
  <div class="page">
    <div class="container">
      <a-row :gutter="16">
        <a-col :sm='6'>
          <cell-card title="个人信息" icon="icon-school" body-class="p-4">
            <div class="flex flex-direction-column flex-jc-center flex-ai-center">
              <a-avatar :src='user.avatar' size='large' />
              <div class="text-bold text-size-lg mt-2">{{ user.userName }}</div>
              <div class="tc-grey-4 text-size-xs mt-2">{{ user.tel }}</div>
            </div>
          </cell-card>
        </a-col>
        <a-col :sm='12'>
          <cell-card title="列表" icon="icon-view-list" body-class="p-4">
            <a-list itemLayout="vertical" size="large" :dataSource="posts">
              <div slot="renderItem" slot-scope="item, index" key="item.title" class="flex line-bottom py-3">
                <div 
                  class="media radius-sm mr-3" 
                  :style="{backgroundImage:`url(${item.image[0]})`,width:'120px',height:'100px'}"
                ></div>
                <div class="flex-body">
                  <div class="text-size-lg tc-dark text-bold">{{ item.title }}</div>
                  <div class="text-size-sm tc-light text-lh-md mt-1">
                    {{ item.discription }}
                  </div>
                </div>
              </div>
            </a-list>
          </cell-card>
        </a-col>
        <a-col :sm='6'>
          <cell-card title="其它" icon="icon-view-module" body-class="p-4">
            其它
          </cell-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import CellCard from '@/components/cell-card'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
    CellCard
  },
  computed:{
    ...mapState([
      'user',
      'userList',
      'posts'
    ])
  },
  methods:{
    ...mapMutations([
      'getUser',
      'getUserList',
      'getPosts'
    ])
  },
  created(){
    this.getUser()
    this.getUserList()
    this.getPosts()
    console.log(this.posts);
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/base'
.header-bar
  height: 80px
  text-align: center;
  background-color: $grey-base
  .title-big
    font-size: 32px
    font-weight: bold;
    margin: 0
</style>
