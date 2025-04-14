<script setup>
var props=defineProps({
    gpa:{ type:String,
    required: true
}});
</script>

<template>
    <div class="gpa-display">
        <h2>Your GPA is: <span> {{props.gpa}}</span></h2>
    </div>
</template>
<style scoped
>
.gpa-display{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    border: 1px solid #c2c2c2; 
    border-radius: 10px;
    padding: 7px 33px;
  
}
.gpa-display span{
    color: rgb(98, 98, 180);
}
</style>