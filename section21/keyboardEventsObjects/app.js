document.querySelector('button').addEventListener('click', function () {
    alert("CLICK");
})

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    console.log("KEYDOWN");
    console.log(e.key);
    console.log(e.code);
})

input.addEventListener('keyup', function () {
    console.log("KEYUP");
}) 

window.addEventListener('keydown', function (e) {
    switch (e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;

            case 'ArrowDown':
                console.log("DOWN!");
                break;
    }
})