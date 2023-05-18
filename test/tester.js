function setImageSrc(data){
    let title = document.getElementById("title");
    title.src = data.title;
    let title = document.getElementById("title");
}

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => {
        let data = {
            title: json.title,
            completed: json.completed
        };
        return data;
    })
    .then(setImageSrc)
    .catch((err) => console.error(err))