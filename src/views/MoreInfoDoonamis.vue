<template>
    <div class="MoreInfo">
        <SideBarDoonamis v-if="this.serie" v-bind:serie="serie"/>
        <ContentDoonamis v-if="this.serie" v-bind:serie="serie"/>
    </div>
</template>
  
<script>
import ContentDoonamis from '../components/ContentDoonamis.vue';
import SideBarDoonamis from '../components/SideBarDoonamis.vue';
import { getSerieById } from '../scripts/series.js';

export default {
    name: 'MoreInfoDoonamis',
    components: {
        ContentDoonamis,
        SideBarDoonamis,
    },
    data(){
        return{
            serie : null
        }
    },
    async mounted() {
        await this.getSerie()
    },
    methods:{
        async getSerie(){
            if (this.$route.params.id)
                this.serie = await getSerieById(this.$route.params.id)
        }
    }
}
</script>