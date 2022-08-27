

const title = document.createElement('h2');
title.style.textAlign = 'center';
title.style.fontWeight = 'regular';
title.style.fontFamily = 'arial';
title.style.marginBottom = '0px'
title.textContent = 'Number Generator'
document.body.appendChild(title)

const title2 = document.createElement('h3');
title2.style.fontWeight = '100';
title2.style.marginBottom = '0px'
title2.style.marginTop = '4px'
title2.style.textAlign = 'center';
title2.style.textDecoration = 'underline';
title2.style.fontFamily = 'arial';
title2.textContent = 'DOM Manipulation using JS'
document.body.appendChild(title2)

const title3 = document.createElement('h5');
title3.style.fontWeight = '100';
title3.style.marginTop = '4px'
title3.style.textAlign = 'center';
title3.style.textDecoration = 'underline';
title3.style.fontFamily = 'arial';
title3.textContent = 'Author: Aman Bisht'
title3.style.color = 'grey'
document.body.appendChild(title3)

let container;
const input = document.querySelector('input');
const button = document.querySelector('#button');
const p = document.querySelector('p')

button.addEventListener('click', () => {


     if ((input.value / 1) == input.value) {
          for (var i = 0; i <= input.value; i++) {
               container = document.createElement('div');
               container.textContent = i;
               if (i % 2 == 0) {
                    container.style.backgroundColor = 'green'
               }

               if (i % 2 != 0) {
                    container.style.backgroundColor = 'yellow'
               }
               if (i > 1) {
                    let isPrime = true;
                    // looping through 2 to number-1
                    for (let j = 2; j < i; j++) {
                         if (i % j == 0) {
                              isPrime = false;
                              break;
                         }
                    }

                    if (isPrime) {
                         container.style.backgroundColor = 'red';
                    }

               }
               // for (var l = 0; l < i; l++) {
               //      container.style.display = 'flex'
               //      container.style.flexFlow = 'column, wrap'
               // }
               container.style.display = 'inline-block'
               // container.style.flexDirection = 'column'
               container.style.margin = '3px'
               container.style.color = 'white'
               if (i < 10) {
                    container.style.padding = '17px 44.3px'
               }
               if (i > 9) {
                    container.style.padding = '17px 40px'
               }
               if (i >= 100) {
                    container.style.padding = '17px 35.5px'
               }
               container.style.opacity = '0.7'
               container.style.fontFamily = 'arial'
               document.body.appendChild(container)
          }

     }
     else if (input.value == NaN) {
          p.textContent = "This feild can't be empty"
          p.style.color = 'red'
     }
     else if (input.value != Number) {
          p.textContent = "Entered value should be a number"
          p.style.color = 'red'
     }
})
const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
     for (let i = input.value; i >= 0; i--) {
          container.textContent = 'new from here';

     }
})
