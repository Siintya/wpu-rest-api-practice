function viewAllMenu() {
    $.getJSON('kopi-nako/data/coffee.json', function(data) {
        // console.log(data);

        let menu = data.menu;
        // console.log(menu);
        $.each(menu, function(i, data) {
            // console.log(data)
            // $('#daftar-menu').append('<div class="col-md-3 mb-5"><div class="card h-100"><img src="kopi-nako/img/menu/'+ data.gambar +'" class="card-img-top" alt="gambar"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><h5 class="card-title">Rp. '+ data.harga +'</h5><div class="d-grid gap-2"><a href="#" class="btn btn-dark">Order</a></div></div></div></div>');
            let formatHarga = new Intl.NumberFormat('id-ID').format(data.harga);

            let card = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data.nama}</h5>
                                    <h5 class="card-title font-weight-bold mb-3">Rp. ${formatHarga}</h5>
                                    <div class="">
                                        <a href="#" class="btn btn-outline-dark">Order Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <img src="kopi-nako/img/menu/${data.gambar}" class="card-img-top" alt="gambar">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#daftar-menu').append(card);
        })
    });
}

viewAllMenu();

// Menu dengan active
$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    // Kategori
    let kategori = $(this).html();
    // console.log(kategori);

    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        viewAllMenu();
        return
    }

    $.getJSON('kopi-nako/data/coffee.json', function(data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                let formatHarga = new Intl.NumberFormat('id-ID').format(data.harga);
                content += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.nama}</h5>
                                        <h5 class="card-title font-weight-bold mb-3">Rp. ${formatHarga}</h5>
                                        <div class="">
                                            <a href="#" class="btn btn-outline-dark">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <img src="kopi-nako/img/menu/${data.gambar}" class="card-img-top" alt="gambar">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        $('#daftar-menu').html(content);
    });
});
