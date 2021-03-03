const form = document.querySelector('form');
const newList = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const product = document.querySelector('#product');
    const quantity = document.querySelector('#qty');
    console.log(quantity.value);

    // console.log(Object.values(quantity));

    addItem(product.value, quantity.value);

    quantity.value = "";
    product.value = "";

    // console.dir(quantity);


})

const addItem=(product, quantity) =>{

const newListItem = document.createElement('li');
newListItem.innerHTML = `${quantity} ${product}`;



console.dir(quantity);




newList.appendChild(newListItem);
}


// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');

// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

// const usernameInput = tweetForm.elements.username;
// const tweetInput = tweetForm.elements.tweet;
// addTweet(usernameInput.value, tweetInput.value);
// usernameInput.value = '';
// tweetInput.value ='';

// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag =document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`);
//     tweetsContainer.append(newTweet);
// }

