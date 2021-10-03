// let arr = []
// let crat = ''
// let click = document.getElementById('button1')
// click.onclick = function (){
//     for(let i = 0; i<=10; i++){
//         arr.push(Math.floor(Math.random()*20)) 
//         crat += arr[i]+','
//     }
//     for(let i = 0; i<=10; i++){
//         if(arr[i]%7 === 0){
//             alert(`[${crat.slice(0,crat.length-1)}] - первый елемент который кратный 7 находится под индексом ${i}`)
//             i = 11
//         }

//     }
    
// }


// let a = +prompt(` Введите цену за компютер в $`)
// document.write(`
// <div class="privatbank">
// <img src="img/privatbank-r0-square_medium.jpg" alt="" width="50px" height="50px">
//  <h2>С вашей карты списано ${a} $</h2>
// </div>
// `)


document.getElementById('start').addEventListener('click', ()=>{
 let text = +prompt('Введите оценку по 5 бальной системе');
 let grade = ''
 let img = ''
 switch (text) {
    case text = 1:
         grade = 'Иди учись товарищь'
         img = ' img/towar.jpg'
         break;
     case text = 2:
         grade = 'Вы получили плохую оценку'
         img  = 'img/60182fa8e5e39.jpg '
         break;
     case text = 3:
         grade = 'Вы получили удовлетворительную оценку'
         img = 'img/59bb8da94cfc3b5d93da98336c366587.jpg'
         break
     case text = 4:
         grade = 'Вы получили xорошую оценку'
         img = 'img/unnamed.jpg'
         break;
     case text = 5:
         grade = ' Вы получили отличную оценку' 
         img = 'img/unnamed (2).jpg'
         break
     default:
         grade = 'не ну это уже перебор '
         img = ' img/ra1Gq17UJTktofRiQ3UhGqRYsihRLDuxGVYHTuZUdrc.jpg'
         break;
 }
let w = document.open("","","width=550,height=600"); 
 w.document.write(`<h2 style = 'color: green'>${grade}</h2>   
                     <img src="${img}" alt="">`) 
document.getElementById('close').addEventListener('click', ()=>{
w.document.close()
})
 
})

