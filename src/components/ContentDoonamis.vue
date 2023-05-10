<template>
    <div class="Content">
        <a :href="serie.homepage" target="_blank"><h1>{{ serie.name }}</h1></a>
        <img :src="serie.last_episode_to_air.still_path" :alt="'Poster Capitulo' + serie.last_episode_to_air.name" :title="serie.last_episode_to_air.name">
        <h2>{{ serie.last_episode_to_air.name }}</h2>
        <h3>Temporada {{ serie.last_episode_to_air.season_number }}, Episodio {{ serie.last_episode_to_air.episode_number }}</h3>
        <p>{{ serie.last_episode_to_air.overview }}</p>
        <hr>
        <h2>Episodios</h2>
        <!--<ul>
            <li v-for="serie in series" :key="serie.id">
                <img :src="serie.poster_path" :alt="'Poster ' + serie.name" :title="serie.name"><br>
                <span>{{ serie.name }}</span>
            </li>
        </ul>-->
        <hr>
        <h3>Similar</h3>
        <ul>
            <li v-for="similar in similars" :key="similar.id">
                <router-link :to="`/series/`+similar.id" target="_blank"><img :src="similar.poster_path" alt="">
                <span>{{ similar.name }}</span></router-link>
            </li>
        </ul>
        <hr>
        <h3>Recomendado</h3>
        <ul>
            <li v-for="recommendation in recommendations" :key="recommendation.id">
                <router-link :to="`/series/`+recommendation.id" target="_blank"><img :src="recommendation.poster_path" alt="">
                <span>{{ recommendation.name }}</span></router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { getRecommendationsById, getSimilarById, getEpisodesById } from '@/scripts/series';

export default {
    name: 'ContentDoonamis',
    props: {
        serie:{
            type: Object
        }
    },
    data(){
        return{
            recommendations : null,
            similars : null,
            episodes : null
        }
    },
    async mounted(){
        await this.getRecommendations(),
        await this.getSimilar(),
        await this.getEpisodes()
    },
    methods:{
        async getRecommendations(){
            if (this.$route.params.id)
                this.recommendations = await getRecommendationsById(this.$route.params.id)
        },
        async getSimilar(){
            if (this.$route.params.id)
                this.similars = await getSimilarById(this.$route.params.id)
        },
        async getEpisodes(){
            if (this.$route.params.id)
                this.episodes = await getEpisodesById(this.$route.params.id)
        }
    }
}
</script>