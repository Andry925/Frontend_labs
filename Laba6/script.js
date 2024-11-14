
let isActivatedFetch = false;

const displayMessage = (message, type) => {
  const existingMessage = document.getElementById('message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.id = 'message';
  messageDiv.textContent = message;
  messageDiv.classList.add('flex-container-center', type);
  document.body.appendChild(messageDiv);
};

const createCardContent = (data, index) => {
  const card = document.createElement('div');
  card.id = `card${index}`;
  card.classList.add('card', 'flex-container-center-card-content');

  const elements = [
    `<img class="padding" src="${data.picture.large}" alt="Ooops...">`,
    `<div class="padding">Full Name: ${data.name.first} ${data.name.last}</div>`,
    `<div class="padding">Country: ${data.location.country}</div>`,
    `<div class="padding">Postcode: ${data.location.postcode}</div>`,
    `<div class="padding">Phone: ${data.phone}</div>`
  ];

  elements.forEach(element => card.insertAdjacentHTML('beforeend', element));
  document.getElementById('cards').appendChild(card);
};

const fetchData = async (context) => {
  context.disabled = true;

  if (isActivatedFetch) {
    displayMessage("You have  already fetched the data. Refresh the page and try again");
  } else {
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch('https://randomuser.me/api');
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        createCardContent(data.results[0], i);
      } catch (error) {
        displayMessage(error.message, 'danger-strip');
        break;
      }
    }
    isActivatedFetch = true;
  }

  context.disabled = false;
};
