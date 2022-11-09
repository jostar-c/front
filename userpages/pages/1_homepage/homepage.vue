<template>

    <!-- test -->
    <div>
        <router-link to="login" target="_blank">
            <button>login</button>
        </router-link>
        {{ islogin }}
    </div>

</template>
  
<script>
export default {
    data () {
        return {
            islogin: this.global.islogin
        }
    },
    created () {
        this.global_func('Hi')
    }
}
</script>
  
<style>

</style>
  