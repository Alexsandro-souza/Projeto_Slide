// Variáveis

let img = document.querySelectorAll('.container figure');
let ball = document.querySelectorAll('.singleBall > span');
let lastIndex = 0

// Funções

img.forEach((elemento,index) => {
    console.log(elemento, index)
    ball[index].addEventListener('click',()=>{
        let lastImage = img[lastIndex];
        let actualImage = img[index];
        
        let lastBall = ball[lastIndex];
        let actualBall = ball[index];
       
        actualImage.classList.remove('hide')
        lastImage.classList.add('hide')
        actualBall.classList.add('active')
        lastBall.classList.remove('active')
        lastIndex = index;
        console.log(actualImage,index)
        

    })
});



