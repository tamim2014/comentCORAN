    $(document).ready(function(){

				// On cache les sous-menus :
				$(".dropdown-content span.subMenu").hide();


				//$(".dropdown-content a.toggleSubMenu > a").click( function () {
				$(".dropdown-content a.toggleSubMenu").click( function () {
					// Si le sous-menu était déjà ouvert, on le referme :
					if ($(this).next("span.subMenu:visible").length != 0) {
						$(this).next("span.subMenu").slideUp("normal");
					}
					// Si le sous-menu est caché, on ferme les autres et on l'affiche :
					else {
						$(".dropdown-content span.subMenu").slideUp("normal");
						//$(this).next("a.subMenu").slideDown("normal");
						$(this).next("span.subMenu").slideDown("normal");
					}
					// On empêche le navigateur de suivre le lien :
					return false;
				});    
    });