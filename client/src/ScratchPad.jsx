// useEffect(() => {
//   fetch("http://localhost:5000/")
    
//     .then((response) => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error("There is an error with the service");
//       }
//     })
//     .then((data) =>
//       video.setVideos(data).catch((error) => setError(error.message))
//     );
// }, []);


// <div className="App">
//       {videos.length ? (<Header />
//       <NewVideoCard onAdd={onAdd} />
//       <VideoCards
//         videos={videos}
//         removeVideo={removeVideo}
//         setVideos={setVideos} // use state spl
//       />{" "}
//      ) : <h2>{null}</h2>}
//     </div>
//   );