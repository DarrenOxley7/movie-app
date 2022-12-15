var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches){
    itemWrapper.innerHTML = '';

    for (var matchObj of matches) {
        itemWrapper.insertAdjacentHTML('beforeend',`
            <div class="movie-item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0,0, 0.5)), url(${matchObj.image_url});">
                <h3>${matchObj.title}</h3>
                <p>${matchObj.description}</p> 
                <a href="${matchObj.imdb_url}" target="_blank">View More Details</a>
            </div>
        `)
    }
}

function getMovieData(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase();

    if (keyCode === 13 && searchText) {
        var matches = [];

        for (var movie of movieData) {
            if (movie.title.toLocaleLowerCase().includes(searchText)) {
                matches.push(movie);
            }
        }


        fetch('https://www.omdbapi.com/?apikey=b50726e4&t=drive')
        .then(function(responseObj) {
           var dataPromise = responseObj.json();

           dataPromise.then(function(data) {
            console.log(data)
           });

           
        });

        displayMatches(matches)
    }
}


function init() {
    searchInput.addEventListener('keydown', getMovieData)
}

init();

//grab html elements
//Get the input's value on enter key press
//Grab data related to user's search
//inject the movie items into the DOM based on user's search







/*
<div class="movie-item">
<h3>Movie Title</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
<a href="#">View More Details</a>
</div>
*/

/*background:
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(https://api.lorem.space/image/movie?w=150&h=220);*/ 