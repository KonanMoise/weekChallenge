// let test = document.querySelectorAll('.test')
let resul = document.querySelector('.btn_result')
let ajoutDé = document.querySelector('.btn_div')
let blocDé = document.querySelector('#bloc_de')

// AJOUT DES DIV
let cptDiv = 0;
let total = 0;
ajoutDé.addEventListener('click', function(e) {
    e.preventDefault()
    cptDiv++

    console.log("Jia ajouter une div")

    if (cptDiv <= 5){

        var div = document.createElement('div');
        div.innerHTML = 'Click !';
        div.classList = 'de test';
        console.log("Jia creer une div")
        blocDé.appendChild(div);

        var test = document.querySelectorAll('.test')
        console.log(test)
        // tabNbr = [1,2,3,4,5,6]

    }

    var c = 0
    test.forEach(Elemen =>{
        if (Elemen){
            Elemen.addEventListener('click',()=>{
                c++
                console.log('le passage n° ', c)
                if (Elemen)
                nbrAléa = Math.trunc((Math.random()*6)+1)
                console.log("Je genere un nbr aléa")
                console.log('Le nbr alé: ', nbrAléa)
                Elemen.textContent = nbrAléa
                console.log(Elemen.textContent)
                // console.log(eval(Elemen.textContent+2))
                console.log('le result est ', total + Elemen.textContent)
                total = parseInt(total) + parseInt(Elemen.textContent)
                console.log('le total est : ',total)
            })
        }
        else{
            console.log("Code vas te tuer")
        }

    }) 
    
}, false);

resul.addEventListener('click', ()=>{
    alert(total)
    console.log('test in test')
    window.location.reload()
})
