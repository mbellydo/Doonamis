<template>
    <div class="SideBar">
        <img :src="serie.poster_path" :alt="'Poster ' + serie.name" :title="serie.name" width="150">
        <p>{{ serie.overview }}</p>
        <hr>
        <h2>IMDB</h2>
        <p><font-awesome-icon icon="fa-solid fa-star" /> {{serie.vote_average}} /10</p>
        <h3>Reseñas de usuarios</h3>
        <ul>
            <li v-for="review in reviews" :key="review.id">
                <img :src="review.author_details.avatar_path" alt="">
                <span>{{ review.content }}</span>
            </li>
        </ul>
        <button>Escribe una reseña!</button>
    </div>
</template>

<script>
import { getReviewsById } from '@/scripts/series';

export default {
    name: 'SideBarDoonamis',
    props: {
        serie:{
            type: Object
        }
    },
    data(){
        return{
            reviews: []
        }
    },
    async mounted(){
        await this.getReviews()
    },
    methods:{
        async getReviews(){
            if (this.$route.params.id)
                this.reviews = await getReviewsById(this.$route.params.id)
        }
    }
}
</script>
  