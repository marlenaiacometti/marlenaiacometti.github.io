const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const images = ['pic_1.jpg', 'pic_2.jpg', 'pic_3.jpg', 'pic_4.jpg', 'pic_5.jpg'];


/* Declaring the alternative text for each image file */
const alt_texts = {
    'pic_1.jpg' : 'Buddha statue outside a Bangkok temple',
    'pic_2.jpg' : 'Lion guardian statue outside the Grand Palace in Bangkok',
    'pic_3.jpg' : 'Artwork of birds from inside a Bangkok temple',
    'pic_4.jpg' : 'Closeup of a white flower',
    'pic_5.jpg' : 'Warrior statue outside the Grand Palance in Bangkok'
}


/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/carousel/${image}`);
    newImage.setAttribute('alt', alt_texts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });