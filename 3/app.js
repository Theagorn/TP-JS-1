document.addEventListener("DOMContentLoaded", function() {

    //Phase 1
    const lesTxt = document.getElementsByTagName('p');

    console.log(lesTxt);


    //Phase 2
    const textesTab = Array.from(lesTxt);

    console.log(textesTab);


    //Phase 3
    textesTab.map((paragraphe, index) => {
        paragraphe.innerHTML = `Nouveau paragraphe ${index + 1}`;
    });
    
})