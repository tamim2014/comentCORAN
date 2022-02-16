		/**
		 * Date:03 Fév 2022
		 *
		 */
		 
		 
		 //  dropdomwn-content : Afficher sans cliquer
	    document.getElementById("compagnon").onmouseover = function(){ document.getElementById("swahaba").classList.toggle("show"); }; 
	    document.getElementById("imam").onmouseover = function(){ document.getElementById("imamou").classList.toggle("show"); }; 
	    document.getElementById("savant").onmouseover = function(){ document.getElementById("moilimou").classList.toggle("show"); }; 
	    document.getElementById("exegete").onmouseover = function(){ document.getElementById("fundi").classList.toggle("show"); }; 
			


		// dropdomwn-content :  Afficher avec 1 click ( i suffit de virer le les 4 lignes ci-haut
		
		var dropdowns = document.getElementsByClassName("dropdown-content2");
		var i;
		function swahaba() { document.getElementById("swahaba").classList.toggle("show"); }
		function imamou() { document.getElementById("imamou").classList.toggle("show"); }
		function moilimou() { document.getElementById("moilimou").classList.toggle("show"); }
		function fundi() { document.getElementById("fundi").classList.toggle("show"); }
		function cacherLaListe(){
			if (!event.target.matches('.dropbtn2')) {
				for (i = 0; i < dropdowns.length; i++) {
				  var openDropdown = dropdowns[i];
				  if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				  }
				}
			}
		}
		
		
		// redirection
		function bibliographieIndex(){
		  document.location.href="bibliographieIndex.html"; 
		}
		
		
		
		
		
		// Close the dropdown if the user clicks outside of it
		window.onclick = function(event) { cacherLaListe(); }
		// fermeture du dropdomwn-content si le curseur sort du dropdown
		document.getElementById("divcompagon").onmouseleave = function(event) { cacherLaListe(); }
		document.getElementById("divimam").onmouseleave = function(event) { cacherLaListe();}
		document.getElementById("divsavant").onmouseleave = function(event) { cacherLaListe();}
		document.getElementById("divexegete").onmouseleave = function(event) { cacherLaListe();}




		
	   