<template>
    <div class="card">
        <div class="tituloCard">{{ card.nome }}</div>
        <div class="descCard">{{ card.desc }}</div>
        <div class="tagsCard">
            <div class="tag" v-for="tag in card.tags">{{ tag }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type:Object
            }
        }
    }
</script>