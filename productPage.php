

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="phpstyle.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossorigin="anonymous"></script>
    <title>Product Form</title>
</head>
<body>
<?php
$productName=$_GET["productName"];
$productColor=$_GET["productColor"];
?>
<?php echo  $productColor ; ?>

<div class="product container">
    <div class="row">
        <div class="col-md-5">
            <div class="img-container">
                <svg fill="<?php echo  $productColor  ?>" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 295.526 295.526" style="enable-background:new 0 0 295.526 295.526;"
                     xml:space="preserve">
<g>
    <path d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345
		c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"/>
    <path d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611
		c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659
		c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126
		c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873
		c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283
		l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052
		c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z
		"/>
</g>
</svg>
            </div>
        </div>
        <div class="col-md-7">
            <?php
            echo "<h2>You choose Men's T Shirt of type <span style='color:$productColor '>" .$productName ." </span></h2>";
            ?>
            <p>Product Code: IFH39200</p>
            <p class="price">800 ILS</p>
            <p><b>Availability:</b> In Stock</p>
            <p><b>Condition:</b> New</p>
            <p><b>Brand:</b> ADIDAS</p>
            <label>Quantity:</label>
            <input type="number" value="1">
            <button class="btn btn-danger cart">Add to cart</button>
        </div>
    </div>

</div>
</body>
</html>