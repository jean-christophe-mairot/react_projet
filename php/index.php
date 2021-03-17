<?php
include "inc/header.php";
require 'inc/fonction.php';
//fonction pour recup les recherches
$searchResults = getSearch();
// test($searchResults);


?>
	<div class="flex">
		<div class="searchBar">
			<form action="" method="POST">
				<!-- champ de recherche du user -->
				<label for="search"></label>
				<input type="search" list="planesDcs" autocomplete="off" name="search" id="search" placeholder="Quel avions ?" />
				<datalist id="planesDcs"></datalist>	
				<button class="btn" type="submit" id="validate" value="validate"></button>
			</form>
		</div>		
	</div >
<!-- fermeture div qui commence dans le header -->
<!-- debut de la card -->
		<div class="flex card">
			
			<div class="" id="description">
				<!-- resultat de la recherche txt description-->
			<!-- </div> -->

			<!-- <div class="" id="imgMovie"> -->
				<!-- resultat de la recherche img-->
			<div class="" id="img_ext"></div>
			<div class="" id="img_int"></div>
			<div class="" id="movie"></div>
			</div>
			<div class="bgPlane"></div>
		</div>
	

<?php
include "inc/footer.php";
?>
