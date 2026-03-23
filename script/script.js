                        
                        
                    // JS index.html Burger

                        

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé'); // Vérifie que le script se charge
    const burgerMenu = document.querySelector('.burger_menu');
    const navMenu = document.querySelector('.nav_menu');
    const body = document.body;

    if (!burgerMenu || !navMenu) {
        console.error('Erreur : .burger_menu ou .nav_menu introuvable dans le DOM');
        console.log('burgerMenu:', burgerMenu);
        console.log('navMenu:', navMenu);
        return;
    }

    burgerMenu.addEventListener('click', () => {
        console.log('Bouton burger cliqué'); // Confirme que le clic est détecté
        try {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
            console.log('Classes après clic - burger:', burgerMenu.classList, 'nav:', navMenu.classList, 'body:', body.classList);
        } catch (error) {
            console.error('Erreur lors de la gestion du menu burger :', error);
        }
    });

    const menuLinks = document.querySelectorAll('.header_menu_element a');
    console.log('Nombre de liens trouvés:', menuLinks.length); // Vérifie les liens
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Lien du menu cliqué:', link.textContent); // Confirme le clic sur un lien
            try {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            } catch (error) {
                console.error('Erreur lors de la fermeture du menu :', error);
            }
        });
    });
});



                    // JS index1.html Burger


                    

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé'); // Vérifie que le script se charge
    const burgerMenu = document.querySelector('.burger_menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (!burgerMenu || !navMenu) {
        console.error('Erreur : .burger_menu ou .nav-menu introuvable dans le DOM');
        console.log('burgerMenu:', burgerMenu);
        console.log('navMenu:', navMenu);
        return;
    }

    burgerMenu.addEventListener('click', () => {
        console.log('Bouton burger cliqué'); // Confirme que le clic est détecté
        try {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
            console.log('Classes après clic - burger:', burgerMenu.classList, 'nav:', navMenu.classList, 'body:', body.classList);
        } catch (error) {
            console.error('Erreur lors de la gestion du menu burger :', error);
        }
    });

    const menuLinks = document.querySelectorAll('.nav_menu_element a');
    console.log('Nombre de liens trouvés:', menuLinks.length); // Vérifie les liens
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Lien du menu cliqué:', link.textContent); // Confirme le clic sur un lien
            try {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            } catch (error) {
                console.error('Erreur lors de la fermeture du menu :', error);
            }
        });
    });
});




async function loadContent() {
  try {
    // Remplace l’URL par celle de ton Umbraco + l’ID du contenu
    const res = await fetch("http://localhost:38945/umbraco/delivery/api/v1/content/{2dcc0f43-744b-43a5-86cb-f42416e35b21}");
    const data = await res.json();

    // Injection dans le HTML
    document.getElementById("title").innerText = data.title;
    document.getElementById("body").innerText = data.bodyText;
  } catch (error) {
    console.error("Erreur de chargement du contenu Umbraco :", error);
  }
}

loadContent();
