// Api key 7e7bc6a7
// $('.search-button').on('click', function (e) {
//   e.preventDefault();

//   $.ajax({
//     method: "get",
//     url: "http://www.omdbapi.com/?apikey=7e7bc6a7&s=" + $('.input-keyword').val(),
//     success: function (response) {
//       const movies = response.Search;

//       let cards = '';

//       movies.forEach(movie => {
//         cards += showCards(movie);
//       });

//       $('#movie-list').html(cards);

//       $('.modal-detail').on('click', function (event) {
//         event.preventDefault();

//         $.ajax({
//           url: 'http://www.omdbapi.com/?&apikey=7e7bc6a7&i=' + $(this).data('imdbid'),
//           success: response => {
//             $('.modal-content').html(showMovieDetail(response));
//           },
//           error: e => {
//             console.log(e.responseText);
//           }
//         })
//       })

//       $('#modalDetail').on('hidden.bs.modal', function (event) {
//         $('.modal-detail', this).html();
//       })

//     },
//     error: function (e) {
//       console.log(e.responseText);
//     }
//   });
// })

const btnSearch = document.querySelector('.search-button');
btnSearch.addEventListener('click', function (event) {
  event.preventDefault();
  const keyword = document.querySelector('.input-keyword')

  fetch('http://www.omdbapi.com/?apikey=7e7bc6a7&s=' + keyword.value)
    .then(response => response.json())
    .then(response => {
      const movies = response.Search;

      let cards = '';
      movies.forEach(movie => cards += showCards(movie));

      document.getElementById('movie-list').innerHTML = cards;

      const modalDetails = document.querySelectorAll('.modal-detail');

      modalDetails.forEach(btn => {
        btn.addEventListener('click', function (event) {
          event.preventDefault();

          fetch('http://www.omdbapi.com/?&apikey=7e7bc6a7&i=' + this.dataset.imdbid)
            .then(response => response.json())
            .then((response) => document.querySelector('.modal-content').innerHTML = showMovieDetail(response));
        })
      });

      const modal = document.getElementById('modalDetail');
      modal.addEventListener('hidden.bs.modal', function (event) {
        this.querySelector('.modal-content').innerHTML = '';
      })
    })

});


function showCards(movie) {
  return `
      <div class="col">
        <div class="card my-3">
          <img src="${movie.Poster}" class="card-img-top" alt="poster ${movie.Title}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail" data-bs-toggle="modal" data-bs-target="#modalDetail" data-imdbid="${movie.imdbID}">Show Details</a>
          </div>
        </div>
      </div> 
  `
}

function showMovieDetail(response) {
  return `
    <div class="modal-header">
      <h5 class="modal-title" id="modalDetailLabel">${response.Title} (${response.Year})</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row row-cols-2">
        <div class="col col-lg-auto p-0 px-sm-2">
          <img class="img-fluid" src="${response.Poster}" alt="poster ${response.Title}">
        </div>
        <div class="col col-lg-7 p-0 px-sm-2">
          <ul class="list-group">
            <li class="list-group-item"><strong>Released: </strong>${response.Released}</li>
            <li class="list-group-item"><strong>Genre: </strong>${response.Genre}</li>
            <li class="list-group-item"><strong>Director: </strong>${response.Director}</li>
            <li class="list-group-item"><strong>Writer: </strong>${response.Writer}</li>
            <li class="list-group-item"><strong>Actors: </strong>${response.Actors}</li>
            <li class="list-group-item"><strong>Plot: </strong>${response.Plot}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}