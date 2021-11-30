import './less/index.less'

// Your code goes here! !!!

// MOUSEOVER

const footer = document.querySelector('footer');

footer.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'violet';
    setTimeout(function(){
        event.target.style.backgroundColor = '';
    }, 500)
}, false);

// KEYDOWN

window.addEventListener("keydown", function(event){
    console.log(event.key)
    if (event.key === 'f') {
        window.scrollTo(0, document.body.scrollHeight)
     }
})




// WHEEL

// const image = document.querySelector('img')
//  image.addEventListener('wheel', zoom)

 function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

  // LOAD 
  
  el.addEventListener('load', function(){
     alert('Page is loaded loaded')
  })

  // FOCUS & BLUR

  const menu = document.querySelectorAll('nav a');
  menu.forEach(a => {
      a.addEventListener('focus', event => {
          event.target.style.color = 'grey'
      })
  })
menu.forEach(a => {
    a.addEventListener('blur', event => {
        event.target.style.color = ''
    })
})