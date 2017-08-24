<template>
    <div>
        <input type="text" v-model="iptValue">
        <label>{{iptValue}}</label>
    </div>
</template>

<script>
export default {
    name: 'ipt',
    data(){
        return {
            iptValue: ''
        }
    }
}
</script>


