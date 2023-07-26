// Challenge 2: Cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat');
    image.src = 'http://thedogapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}
