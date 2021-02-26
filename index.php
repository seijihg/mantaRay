<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <style>
    <?php include 'CSS/main.css'; ?>
  </style>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
  <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>


  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/heatmap.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
  <script src="https://code.highcharts.com/modules/accessibility.js"></script>

  <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.js"></script>

  <script src="/js/highcharts.js"></script>
  <script defer src="/js/grid.js"></script>
  <title>Highcharts randomizer!</title>
</head>

<body>
  <div class="container-md">

    <div>
      <h1>Manta Ray</h1>
    </div>

    <div class="main_body">
      <div class="row gy-2">
        <div class="col-md-4">
          <input id="chart_toggle" type="checkbox" data-toggle="toggle">
        </div>

        <div class="col-md-8">
          <div id="container_chart" style="height: 600px;"></div>
          <div id="myGrid" style="height: 200px; display: none;" class="ag-theme-alpine"></div>
        </div>
      </div>



      <div class="tasks_buttons">
        <button id="random_btn" type="button" class="btn btn-primary btn-sm">Random</button>
        <button id="add_btn" type="button" class="btn btn-primary btn-sm">Add Random Point</button>
      </div>
    </div>

    <div class="footer bg-light">
      Heatmap showing random points on X Y axis. Add random point will add a random dot in pre-dertimaned range.
      Mouse over will show more details.
      Heatmaps are commonly used to visualize hot spots within data sets, and to show patterns or correlations. Due to their compact nature, they are often used with large sets of data.
    </div>
  </div>

</body>

</html>