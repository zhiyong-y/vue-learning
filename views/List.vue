<template>
    <li>
        {{title}}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        mounted () {
            
        },
        methods: {
            
        },
        watch: {
            
        },
    }
</script>
