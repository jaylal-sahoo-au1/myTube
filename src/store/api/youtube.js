function fetchVideo(store,videotype){
fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBi4HDmLIMGixAaTV3CvDKFAbqNBBNn9pQ")
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

export {fetchVideo};