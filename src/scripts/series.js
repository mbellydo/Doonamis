//https://api.themoviedb.org/3/tv/top_rated?api_key=c6aeee577586ba38e487b74dfede5deb&language=es-ES&page=1

const urlBasica = "https://api.themoviedb.org/3"
const urlTopRated = "/tv/top_rated"
const api_key = "?api_key=c6aeee577586ba38e487b74dfede5deb"
const urlLanguage = "&language=es-ES"
const urlPages = "&page=1"
const url = `${urlBasica}${urlTopRated}${api_key}${urlLanguage}${urlPages}`
const urlPoster = 'https://image.tmdb.org/t/p/w500'
//const urlBuscar = `${urlBasica}/search/tv?${api_key}${urlLanguage}`

export async function verSeries(){
    try {
        const respuesta = await fetch(url)
        const {results} = await respuesta.json()
        
        const modifiedSeries = results.map((serie) => {
            const urlCartel = `${urlPoster}${serie.poster_path}`

            return {...serie,poster_path:urlCartel}
        })

        console.log("Series:", modifiedSeries)

        return modifiedSeries
    } catch (error) {
        console.error(error)
    }
}

export async function getSerieById(id){
    try {
        const serieUrl = `${urlBasica}/tv/${id}${api_key}${urlLanguage}`
        const respuesta = await fetch(serieUrl)
        const data = await respuesta.json()
        
        const urlLastEpisode = `${urlPoster}${data.last_episode_to_air.still_path}`
        const urlCartel = `${urlPoster}${data.poster_path}`
        const lastEpisodeData = {...data.last_episode_to_air,still_path:urlLastEpisode}

        const modifiedSeasons = data.seasons.map((season) => {
            const urlSeason = `${urlPoster}${season.poster_path}`

            return {...season,poster_path:urlSeason}
        })

        const modifiedSerie = {...data,poster_path:urlCartel,last_episode_to_air:lastEpisodeData, seasons:modifiedSeasons}

        console.log("Serie:", modifiedSerie)

        return modifiedSerie
    } catch (error) {
        console.error(error)
    }
}

export async function getReviewsById(id){
    try {
        const reviewUrl = `${urlBasica}/tv/${id}/reviews${api_key}${urlLanguage}`//&language=en-US
        const respuesta = await fetch(reviewUrl)
        const resultado = await respuesta.json()
        
        const modifiedReviews = resultado.results.map((review) => {
            const urlReview = review.author_details.avatar_path.slice(1) //Para español
            //const urlReview = `${urlPoster}${review.poster_path}`

            return {...review,author_details:{...review.author_details,avatar_path:urlReview}}
        })

        console.log("Reviews:", modifiedReviews)

        return modifiedReviews
    } catch (error) {
        console.error(error)
    }
}

export async function getRecommendationsById(id){
    try {
        const recommendationUrl = `${urlBasica}/tv/${id}/recommendations${api_key}${urlLanguage}`
        const respuesta = await fetch(recommendationUrl)
        const data = await respuesta.json()
        
        const modifiedRecommendations = data.results.map((recommendation) => {
            const urlRecommendations = `${urlPoster}${recommendation.poster_path}`

            return {...recommendation,poster_path:urlRecommendations}
        })

        console.log("Recomendations:", modifiedRecommendations)

        return modifiedRecommendations
    } catch (error) {
        console.error(error)
    }
}

export async function getSimilarById(id){
    try {
        const similarUrl = `${urlBasica}/tv/${id}/similar${api_key}${urlLanguage}`
        const respuesta = await fetch(similarUrl)
        const data = await respuesta.json()
        
        const modifiedSimilars = data.results.map((similar) => {
            const urlSimilars = `${urlPoster}${similar.poster_path}`

            return {...similar,poster_path:urlSimilars}
        })

        console.log("Similar:", modifiedSimilars)

        return modifiedSimilars
    } catch (error) {
        console.error(error)
    }
}

export async function getEpisodesById(id){
    try {
        const episodesUrl = `${urlBasica}/tv/episode_group/${id}${api_key}${urlLanguage}`
        const respuesta = await fetch(episodesUrl)
        const data = await respuesta.json()

        console.log("Episodes:", data)

        return data
    } catch (error) {
        console.error(error)
    }
}