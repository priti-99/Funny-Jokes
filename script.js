let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single";
  //This line target to the joke id

let arrow=()=>{
    // fetch the url and then convert the data into json and then by using innerHTML change the content

    fetch(url).then(data=>data.json()).then(
        item =>{
            document.getElementById("joke").innerHTML = `${item.joke}`
        }
    )
}

document.getElementById("btn").addEventListener("click",arrow);
arrow();