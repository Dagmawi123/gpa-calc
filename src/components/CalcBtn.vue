<script setup> 
var emit=defineEmits(['click']);
</script>

<template>
    <button class="calc-btn" @click="$emit('click')">
        Calculate GPA
    </button>
</template>
<style scoped>
.calc-btn{
padding: 7px 31px;
font-size: 17px;
border: none;
border-radius: 20px;
color: #fff;
background-color: #7a4a02;
}
</style>