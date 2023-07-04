document.addEventListener('DOMContentLoaded', function() {
    // Define the text to type
    //   var textToType = "Text Typing Animation On Website Using HTML, CSS, And JS";

    // Initialize the Typed.js instance
    var typed = new Typed('.auto_type', {
        strings: ['web designer', 'Ui designer', 'front end developer'],
        typeSpeed: 150, // typing speed in milliseconds
        backSpeed: 150,
        loop: true
            // showCursor: false // hide the cursor
    });
});


let modalBody = document.querySelector('.m-b');
let modal_video = document.querySelector('.modal_video');
let description = document.querySelector('.description');
let src= document.querySelector('.src');
let modal_h1 = document.querySelector("#modal_h1");
console.log(modal_h1)
let web_links = document.querySelector('.web_links');
let web_1 = document.querySelector('.web_1');
let web_2 = document.querySelector('.web_2');
let web_3 = document.querySelector('#web_3');
// console.log(web_3)
// console.log(modalBody, modal_video, description, web_links);
// console.log(web_1, web_2, web_3)
// display(web_1)

let obj1 = [{
    id: 1,
    Description: 'BISMILALLAH',
    h1:'a',
    videoSrc: 'Bandicam/bandicam 2023-06-12 01-45-27-003.mp4',
    link: 'https://taupe-profiterole-7eea16.netlify.app',
}, {
    id: 2,
    Description: 'BISMILALLAH',
    h1:'b',
    videoSrc: 'c:\Users\PC\Documents\Bandicam\bandicam 2023-06-12 02-02-58-114.mp4',
    link: 'https://unrivaled-cucurucho-e5e8e9.netlify.app',
},{
    id: 3,
    Description: 'BISMILALLAH',
    h1:'c',
    videoSrc: 'c:\Users\PC\Documents\Bandicam\bandicam 2023-06-12 02-06-50-896.mp4',
    link: 'https://resilient-granita-b816a3.netlify.app'
    // link: 'https://chat.openai.com/'
}];


function display(id) {
    // console.log(id)
    let number = id;
    console.log(number)
    console.log(web_links.innerHTML = obj1[number].link)
// modal_h1.textContent = obj1[0].h1
modal_h1.innerHTML = obj1[number].h1;
web_links.href = obj1[number].link;
// console.log(obj1[number]);

// obj1.forEach(element => {
//     // console.log(element);
    
// });

}

// let a = display()
// web_1.addEventListener('click', display)
// web_2.addEventListener('click', display)
// web_3.addEventListener('click', display)