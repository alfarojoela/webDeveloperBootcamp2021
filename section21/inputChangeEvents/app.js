const input1 = document.querySelector('#first');
const input2 = document.querySelector('#second');
const h1 = document.querySelector('h1');

input1.addEventListener('change', function (e) {
    console.log('INPUT EVENT AFTER CLICKED OUTSIDE OF TEXT BOX OR ENTER HIT.');
})

input2.addEventListener('input', function(e) {
    console.log("INPUT EVENT WITH EVERY KEYSTROKE!");
})

input2.addEventListener('input', function (e) {
    h1.innerText = input2.value;
})