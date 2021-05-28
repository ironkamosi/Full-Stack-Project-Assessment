useEffect(() => {
  fetch("http://localhost:5000/")
    
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error("There is an error with the service");
      }
    })
    .then((data) =>
      video.setVideos(data).catch((error) => setError(error.message))
    );
}, []);
