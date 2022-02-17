		
	//document.getElementById("dropdown-btn").style.display="none"; // <= resoud 1 blem en responsive ( mais provoq 1 autre blem en mode normal)
	function responsiveTopnav() {
	  document.getElementById("dropdown-btn").style.display="block";
	  var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
		x.className += " responsive";
	  } else {
		x.className = "topnav";
	  }
	}
