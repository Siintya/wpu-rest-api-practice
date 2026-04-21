<?php 

  $data = file_get_contents('kopi-nako/data/coffee.json');
  $menu = json_decode($data, true);

  $menu = $menu["menu"];
  // echo $menu[8]["nama"];

?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Exercise 4</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="kopi-nako/img/logo.png" alt="logo" width="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h1>All Menu</h1>
      </div>
    </div>

    <div class="row">
      <?php foreach($menu as $row) : ?>
      <div class="col-md-3 mb-5">
        <div class="card h-100">
          <img src="kopi-nako/img/menu/<?= $row["gambar"]; ?>" class="card-img-top" alt="gambar">
          <div class="card-body">
            <h5 class="card-title"><?= $row["nama"]; ?></h5>
            <h5 class="card-title">Rp. <?= $row["harga"]; ?></h5>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-dark">Order</a>
            </div>
          </div>
        </div>
      </div>
      <?php endforeach ?>
    </div>
  </div>


  <script src="https://code.jquery.com/jquery-4.0.0.js" integrity="sha256-9fsHeVnKBvqh3FB2HYu7g2xseAZ5MlN6Kz/qnkASV8U="
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous">
  </script>
</body>

</html>