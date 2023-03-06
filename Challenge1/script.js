
// START création de variable pour indexer les item du html
let btnajout = document.querySelector('.btn_div')
let resul  = document.querySelector('.btn_result')
let contenu = document.querySelector('#bloc_de')
// END création de variable pour indexer les item du html

// variable qui contiengt toutes les div créer
let toutDiv = document.querySelectorAll('.test')

// variables de logique
let total = 0
let cpt = 1


// START ajout de dé
if (cpt<5){
    btnajout.addEventListener('click', ()=>{
        toutDiv[cpt].style.display = 'block'
        toutDiv[cpt].textContent = 'Click!'
        cpt++
    })
}
// END ajout de dé



// START Boucle sur les dé générer et genere un nobre aléatoire
toutDiv.forEach(item =>{
    item.addEventListener('click', ()=>{
        nbrAleatoire = Math.trunc((Math.random()*6)+1)
        item.textContent = nbrAleatoire
        total+=nbrAleatoire
    })
})
// END Boucle sur les dé générer et genere un nobre aléatoire



// START afficher le resultat par le alert
resul.addEventListener('click', ()=>{
    alert('La somme est: ',total)
    window.location.reload()
})
// END afficher le resultat par le alert
