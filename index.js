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
let srcs = document.querySelector('#srcs');
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
        id: 0,
        Description: "I am thrilled to have completed my first assignment successfully! It was a challenging yet rewarding experience that allowed me to apply my knowledge and skills. I dedicated time and effort to understand the requirements, plan my approach, and execute the project to the best of my abilities. Overcoming obstacles along the way only fueled my determination to deliver a high-quality solution. This assignment has not only deepened my understanding of the subject matter but also boosted my confidence as a developer. I am proud of what I have accomplished and look forward to tackling more projects in the future.",
        h1: 'I-PHONE',
        videoSrc: 'file:///C:/Users/PC/Desktop/Bandicam/iphone.mp4',
        link: 'https://taupe-profiterole-7eea16.netlify.app',
    }, {
        id: 1,
        Description: "Participating in this hackathon is an exciting opportunity for me to challenge myself, showcase my skills, and collaborate with fellow developers. I'm eager to apply my knowledge of HTML, CSS, and Bootstrap to create a Toyota-themed web project that stands out. I look forward to pushing my creative boundaries, solving problems, and delivering a high-quality website that captures the essence of Toyota and provides a seamless user experience. This hackathon is a chance for me to learn, grow, and make a meaningful contribution to the team. I am motivated to give my best effort and make this project a success.",
        h1: "Toyota",
        videoSrc: './video/toyota.mp4',
        link: 'https://unrivaled-cucurucho-e5e8e9.netlify.app',
    }, {
        id: 2,
        Description: "I'm thrilled to have completed another task successfully, incorporating Freepik resources into my HTML, CSS, and Bootstrap project. It was a challenging yet fulfilling experience that allowed me to showcase my creativity and design skills. I carefully selected the appropriate Freepik resources, ensuring they aligned perfectly with the requirements of the task. By integrating them into my project, I was able to enhance the visual appeal and user experience of the web page. The combination of HTML, CSS, Bootstrap, and the captivating Freepik resources resulted in a polished and professional final product. This task has further deepened my understanding of front-end development and has given me the confidence to tackle more complex assignments in the future. I'm proud of my accomplishment and eager to continue honing my skills in HTML, CSS, and Bootstrap.",
        h1: 'Freepik ',
        videoSrc: './video/freepik.mp4',
        link: 'https://resilient-granita-b816a3.netlify.app'
            // link: 'https://chat.openai.com/'
    }, {
        id: 3,
        Description: "Completing tasks efficiently and effectively is essential for success in any endeavor. Whether it's a work assignment, a personal project, or a household chore, a well-executed task can bring a sense of accomplishment and productivity. In order to complete tasks successfully, several key factors come into play.",
        h1: 'Guse Number',
        videoSrc: './video/guse number.mp4',
        link: 'https://aesthetic-valkyrie-163b4a.netlify.app'
            // link: 'https://chat.openai.com/'
    }


    , {
        id: 4,
        Description: "Completing tasks efficiently and effectively is essential for success in any endeavor. Whether it's a work assignment, a personal project, or a household chore, a well-executed task can bring a sense of accomplishment and productivity. In order to complete tasks successfully, several key factors come into play.",
        h1: 'ColorFillper',
        videoSrc: './video/colorfillper.mp4',
        link: 'https://thunderous-puppy-34d7d0.netlify.app'
            // link: 'https://chat.openai.com/'
    }

    , {
        id: 5,
        Description: "Completing tasks efficiently and effectively is essential for success in any endeavor. Whether it's a work assignment, a personal project, or a household chore, a well-executed task can bring a sense of accomplishment and productivity. In order to complete tasks successfully, several key factors come into play.",
        h1: 'Counter',
        videoSrc: './video/counter.mp4',
        link: 'https://cool-gnome-fe7b55.netlify.app'
            // link: 'https://chat.openai.com/'
    }

    , {
        id: 6,
        Description: "Completing tasks efficiently and effectively is essential for success in any endeavor. Whether it's a work assignment, a personal project, or a household chore, a well-executed task can bring a sense of accomplishment and productivity. In order to complete tasks successfully, several key factors come into play.",
        h1: 'Forkify API',
        videoSrc: './video/forkifyApi.mp4',
        link: 'https://dainty-kataifi-85218a.netlify.app'
            // link: 'https://chat.openai.com/'
    }, {
        id: 6,
        Description: "Completing tasks efficiently and effectively is essential for success in any endeavor. Whether it's a work assignment, a personal project, or a household chore, a well-executed task can bring a sense of accomplishment and productivity. In order to complete tasks successfully, several key factors come into play.",
        h1: 'Todo list',
        videoSrc: 'video/todo.mp4',
        link: 'https://meek-otter-c5457b.netlify.app'
            // link: 'https://chat.openai.com/'
    }

];



// console.log(col);
// let bgImageurl = [
//     {}, {}, {}, {}, {}, {}, {}, {},  
// ]
// function bgImage(params) {
//     let col = document.querySelector('.col');
//     // console.log('hi');

//     col.style.backgroundImage = "url('bgimg/1.jpg')";

// }
// bgImage()
// let col = document.querySelector(col)

function display(id) {
    let number = id;
    // console.log(number)
    // console.log(web_links.innerHTML = obj1[number].link)
    modal_h1.innerHTML = obj1[number].h1;
    web_links.href = obj1[number].link;
    web_links.innerHTML = obj1[number].link;
    description.innerHTML = obj1[number].Description;
    modal_video.src = obj1[number].videoSrc;
    console.log(obj1[number].videoSrc);

}