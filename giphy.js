const apiKey = GYXMkfLK05tw3T3uYZooBrJd0lmpfe5W;
const fetchTrendingGifs = async () => {
    const response = await fetch(`api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
    return response.body.data;
}
const insertGifs = async () => {
    const gifs = await fetchTrendingGifs();
    gifs.forEach((gif, index) => {
        document.getElementById(`gif-${index}`).setAttribute("src", gif);
    })

      
    }