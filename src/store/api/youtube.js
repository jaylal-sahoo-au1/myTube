import MYTUBE_CONFIG from '../../config';
function fetchVideo(store,action){
    if(action.videotype=="trending"){
        let url =`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`
fetch(url)
.then(function(data){
    return data.json();
})
.then(function(response){
    store.dispatch({
        type:"VIDEOS_LOADED",
        videos:response.items
    })
})
.catch(function(err){
    console.log(err);
})
}
else if(action.videotype=="search"){
    let url =`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}&maxResults=30`
    fetch(url)
.then(function(data){
    return data.json();
})
.then(function(response){
    store.dispatch({
        type:"VIDEOS_LOADED",
        videos:response.items
    })
})
.catch(function(err){
    console.log(err);
})
}
}

function fetchSingleVideo(store,action){
let url =`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;
fetch(url)
.then(function(data){
    return data.json();
})
.then(function(response){
    store.dispatch({
        type:"VIDEO_DATA_LOADED",
        videoData:response.items[0]
    })
})
.catch(function(err){
    console.log(err);
})

}

export {fetchVideo,fetchSingleVideo};