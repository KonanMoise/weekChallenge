let test = document.querySelectorAll('.test')
let resul = document.querySelector('.btn_result')
let ajoutDé = document.querySelector('.btn_div')
let blocDé = document.querySelector('#bloc_de')

// console.log(test)

// console.log(test)
// tabNbr = [1,2,3,4,5,6]
// let total = 0;
// test.forEach(Elemen =>{
    
//     Elemen.addEventListener('click',()=>{
//         nbrAléa = Math.floor(Math.random()*tabNbr.length)
//         Elemen.textContent = nbrAléa

//         total = total + nbrAléa
//         console.log('test1',total)
//     })

// }) 

// resul.addEventListener('click', ()=>{
//     alert(total)
//     console.log('test hors test')
// })

// Ajout de Div
let cptDiv = 0;
ajoutDé.addEventListener('click', function() {
    cptDiv++

    if (cptDiv <= 5){

        var div = document.createElement('div');
        div.innerHTML = 'Click !';
        div.className = 'de test';
     
        blocDé.appendChild(div);
        let test = document.querySelectorAll('.test')
        console.log(test)
        tabNbr = [1,2,3,4,5,6]
        total = 0;
        test.forEach(Elemen =>{
            
            Elemen.addEventListener('click',()=>{
                nbrAléa = Math.floor(Math.random()*tabNbr.length)
                Elemen.textContent = nbrAléa

                total = total + nbrAléa
                console.log('test2',total)
            })

        }) 


    }
    resul.addEventListener('click', ()=>{
        alert(total)
        console.log('test in test')

    })
    
}, false);
