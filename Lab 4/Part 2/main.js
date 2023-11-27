const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg': 'human eye',
  'pic2.jpg': 'Rocks',
  'pic3.jpg': 'new flowers',
  'pic4.jpg': 'tomb',
  'pic5.jpg': 'moth on leaf'
};

/* Looping through images */
for (const imageName of imageArray) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageName}`);
  newImage.setAttribute('alt', altText[imageName]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}


btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
      btn.setAttribute("class","light");
      btn.textContent = "CLICK";
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute("class","dark");
     overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
