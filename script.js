const imageData = [
    {
      src: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1380x427:1382x425)/origin-imgresizer.eurosport.com/2022/11/26/3497624-71299648-2560-1440.jpg',
      title: 'Seleção Francesa',
    },
    {
      src: 'https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/12/Angel-Di-Maria3.jpg',
      title: 'Seleção Argentina',
      
    },
    {
      src: 'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-04/brazil%20%281%29.jpg?itok=pwM8FGxd',
      title: 'Seleção Brasileira',
      
    }
  ];
  

let currentImageIndex = 0;
const images = [
  'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1380x427:1382x425)/origin-imgresizer.eurosport.com/2022/11/26/3497624-71299648-2560-1440.jpg',
  'https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/12/Angel-Di-Maria3.jpg',
  'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-04/brazil%20%281%29.jpg?itok=pwM8FGxd'
];

let currentBackgroundIndex = 0;
const background = [
    'https://thesportslite.com/wp-content/uploads/2022/11/france.webp', 
    'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ae97109c5b6d9e3/63367dae70612220ec4c125e/WC_Squads_Argentina.jpg', 
    'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt298d3864f3d4acdb/63367f780efd8e1b0dfb5986/WC_Squads_Brazil.jpg'];

document.querySelector('.button').addEventListener('click', function() {
    currentBackgroundIndex++;
    if (currentBackgroundIndex >= background.length) {
        currentBackgroundIndex = 0;
    }
    document.querySelector('.bg-image').style.backgroundImage = 'url(' + background[currentBackgroundIndex] + ')';
});

document.querySelector('.button').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= imageData.length) {
      currentImageIndex = 0;
    }
    const currentImage = imageData[currentImageIndex];
    document.querySelector('#image').src = currentImage.src;
    document.querySelector('.image-title').textContent = currentImage.title;
  });
  
