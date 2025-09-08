                        
                        
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