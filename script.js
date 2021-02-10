// let link = document.querySelector('a');

// link.addEventListener('click', function(event) {
//     // alert('hfjalfhjkla');
//     console.log(event.target);
//     event.preventDefault();
// });

let div = document.querySelector('p');
let i = 0;


div.addEventListener ('mousedown', function(event) {
    event.preventDefault();
    i++;
})