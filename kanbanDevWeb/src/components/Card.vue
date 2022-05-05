<script>
    export default {
        props: {
            cardContainer: {
                type:Object
            }
        }
    }
</script>
<template>
    <div class="card">
        <div class="tituloCard">{{ cardContainer.nome }}</div>
        <div class="descCard">{{ cardContainer.desc }}</div>
        <div class="tagsCard">
            <div class="tag" v-for="tag in cardContainer.tags">{{ tag }}</div>
        </div>
    </div>
</template>
