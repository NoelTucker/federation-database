// Stylesheet link
const styling = document.head.appendChild(document.createElement('link'));
styling.rel = 'stylesheet';
styling.href = '../styles/style.css';

// Favicon
const favicon = document.head.appendChild(document.createElement('link'));
favicon.rel = 'icon';
favicon.href = '../images/favicon.svg';

// Infobox image gallery
window.addEventListener('load', () => {
  document.querySelectorAll('.infoimg > div').forEach(row => {
    const images = row.querySelectorAll('img');
    const rowWidth = row.offsetWidth;
    const imageElements = [];
    let totalRatios = 0;
    let imagesChecked = 0;
    
    images.forEach(img => {
      if (img.complete){
        checkCurrentImg();
      } else {
        img.onload = checkCurrentImg;
        img.onerror = () => {
          console.error(`Error loading image: ${img.src}. Skipping this image from calculation.`);
          checkAllImagesLoaded();
        };
      }
      
      function checkCurrentImg(){
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        totalRatios += aspectRatio;
        imageElements.push({img: img, aspectRatio: aspectRatio});
        checkAllImagesLoaded();
      }
    });
    
    function checkAllImagesLoaded(){
      imagesChecked++;
      if (imagesChecked === images.length){
        applySizes();
      }
    }
    
    function applySizes(){
      const imageTotalWidth = rowWidth - (images.length - 1) * 5;
      const commonHeight = imageTotalWidth / totalRatios;
      
      imageElements.forEach(obj => {
        const img = obj.img;
        const aspectRatio = obj.aspectRatio;
        
        img.style.height = `${commonHeight}px`;
        img.style.width = `${commonHeight * aspectRatio}px`;
      });
    }
  });
});

// Image styling
document.querySelectorAll('img').forEach(img => {
  img.parentElement.classList.add('image-link');
});

document.querySelectorAll('#file').forEach(file => {
  file.parentElement.classList.add('file-link');
});
