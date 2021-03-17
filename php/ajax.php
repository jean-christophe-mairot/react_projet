<?php
include "inc/fonction.php";

//si c post on echo le json qui recup de la base de donnée
if (!empty($_POST)) {
    $allplanes =getSearch();
    echo (json_encode($allplanes));
}
// 