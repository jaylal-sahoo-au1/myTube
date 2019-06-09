function fetchVideo(store,videotype,query){
    if(videotype=="trending"){
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
else if(videotype=="search"){
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBi4HDmLIMGixAaTV3CvDKFAbqNBBNn9pQ&q=${query}&maxResults=30`)
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

export {fetchVideo};