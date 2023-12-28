let submit = document.querySelector('.btn');
let container = document.querySelector('.container');
let thanks = document.querySelector('.thanks');
let circle = document.querySelectorAll('.circle');
let rating = document.querySelectorAll('.rating');
let rate = document.querySelector('.rate');


// rate.textContent = `You selected ${rateNum(value)} out of 5`;
// console.log(rateNum(value))
//     console.log(rate.textContent)
// console.log(`my rate ' ${myRate}`);

// console.log(Number(circle.innerText));
// circle.addEventListener('click', function(){
//     console.log(circle.value)
// })

submit.addEventListener('click', function(){
    container.classList.add('hide');
    thanks.classList.remove('hide');
});

circle.forEach(function(but){
    but.addEventListener('click', function(){
        if(but.value !== 0)
        {rate.innerHTML = `<div class="rate">You selected ${but.value} out of 5</div>`;}
    });
});


// circle.forEach(function(button){
//     button.addEventListener('click', function(){
//         circle.forEach(function name(button) {
//             button.classList.remove('active')
//         });
//         this.classList.add('active');
//         rate.value = document.querySelector('.active')[0].innerHTML;
//         console.log(rate.value)
//         rate.innerHTML = `<div class="rate">You selected ${ratey} out of 5</div>`;
//     });
// });

