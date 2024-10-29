const toggleNinthElementColor = () => {
  const ninthElement = document.getElementById('ninth-element');
  if (ninthElement) {
    ninthElement.classList.toggle('invert');
  }
};

const toggleTenthElementColor = () => {
  const tenthElement = document.querySelector('#tenth-element');
  if (tenthElement) {
    tenthElement.classList.toggle('invert');
  }
};
const insertImage = () => {
  const existingImage = document.querySelector('#main-image');
  if (!existingImage) {
    const img = document.createElement('img');
    img.src = './images/genova-piazza-de-ferrari.jpg';
    img.alt = 'Genova';
    img.id = 'main-image';
    img.classList.add('image');
    document.getElementById('image-ref').appendChild(img);
  }
};

const adjustImageZoom = (button) => {
  const zoomActions = {
    zoomIn: 100,
    zoomOut: -100,
  };
  const image = document.querySelector('#main-image');

  if (image && zoomActions[button.id]) {
    const currentWidth = parseInt(getComputedStyle(image).width, 10);
    image.style.width = `${currentWidth + zoomActions[button.id]}px`;
  }
};

const removeImage = () => {
  const imageToRemove = document.querySelector('#main-image');
  if (imageToRemove) {
    imageToRemove.remove();
  }
};
