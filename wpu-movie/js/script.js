function searchMovie() {
        // Reset
    $('#movie-list').html('');

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '72c359b4',
            's': $('#search-input').val()
        },
        success: function (result) {
            // console.log(result)

            if (result.Response == "True") {
                let movies = result.Search;
                // console.log(movies);
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-3 mb-4">
                            <div class="card h-100">
                                <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.Title +`</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">`+ data.Year +`</h6>
                                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">
                                        See Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');


            } else {
                $('#movie-list').html(`
                    <h1 class="text-center text-danger">`+ result.Error +`</h1>
                `)
            }
        }
    });
}


$('#search-button').on('click', function () {
    searchMovie();
})

$('#search-input').on('keyup', function (e) {
    if (e.keyCode == 13) {
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));

    $.ajax({
        url: ('http://omdbapi.com'),
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': '72c359b4',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response == "True") {

                $('.modal-body').html(`
                   <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster +`" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <h4>`+ movie.Title +`</h4>
                                </li>
                                <li class="list-group-item">
                                    Released: `+ movie.Released +`
                                </li>
                                <li class="list-group-item">
                                    Genre: `+ movie.Genre +`
                                </li>
                                <li class="list-group-item">
                                    Director: `+ movie.Director +`
                                </li>
                            </ul>
                        </div>
                    </div>
                   </div> 
                `);


            }
        }
    })
})