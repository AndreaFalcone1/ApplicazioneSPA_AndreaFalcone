//Nascondo gli Elementi
const hide = (es) => {
    es.forEach((e) => {
        e.classList.add("hidden");
        e.classList.remove("visible");
    });
}
//Mostro l'Elemento
const show = (e) => {
    e.classList.add("visible");
    e.classList.remove("hidden");   
}

//Componente Navigator
export const generateNavigatorComponent = (parentElement) => {
    //Prendo tutte le "pagine" da mostrare
    const pages = Array.from(document.querySelectorAll(".page"));
   
    //Definisco la Render da effettuare
    const render = () => {
        //URL della pagina
        const url = new URL(document.location.href); 
        //Ottengo il nome della pagina corrente
        const pageName = url.hash.replace("#", "");
        //Filtra l'array di pagine cercando la URL della pagina in cui si trova, altrimenti se non la trova mette la Home.
        const selected = pages.filter((page) => page.id === pageName)[0] || pages[0];

        //Nascondo tutte le magine
        hide(pages);
        //Mostro la pagina selezionata
        show(selected);
    }

    //Quando il Link della pagina cambia richiamo la Render
    window.addEventListener('popstate', render); 

    //Eseguo la Render della pagina
    render();   
}