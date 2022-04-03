'use strict';

/* Elements from HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');

//Objects from Kittens
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_2 = {
  image:
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_3 = {
  image:
    'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Funtions
function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.image}
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Show/hide the form
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
// Add new kitten
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    labelMesageError.innerHTML = '';
  }
}

//Cancel the search for a kitten
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

// //Filter by description
// function filterKitten(event) {
//   event.preventDefault();
//   const descrSearchText = input_search_desc.value;
//   listElement.innerHTML = '';
//   for (const kittenItem of kittenDataList) {
//     if (kittenItem.desc.includes(descrSearchText)) {
//       listElement.innerHTML += renderKitten(kittenItem);
//     }
//   }
// }
//Show kitty list in HTML
renderKittenList(kittenDataList);

//Events
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
// searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);

console.log('hola');

//  const buttonAdd = document.querySelector(".js-btn-add");
//  const inputDesc = document.querySelector(".js-input-desc");
//  const inputPhoto = document.querySelector(".js-input-photo");
//  const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector('.js-input-race');
//  const labelMesageError = document.querySelector(".js-label-error");

// copiado de part-7
//  const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Add new kitten
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    console.log('hello1');
  } else if (
    valueDesc !== '' ||
    valuePhoto !== '' ||
    valueName !== '' ||
    valueRace !== ''
  ) {
    labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    console.log('hello2');
  }

  // faltaría borrar valores

  const newKittenDataObject = {
    image: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };

  kittenDataList.push(newKittenDataObject);

  renderKittenList(kittenDataList);
}

// compruebo que el nuevo objeto se ha añadido al array

buttonAdd.addEventListener('click', addNewKitten);

///

//Filter by description
// function filterKitten(event) {
//   event.preventDefault();
//   const descrSearchText = input_search_desc.value;
//   listElement.innerHTML = '';
//   for (const kittenItem of kittenDataList) {
//     if (kittenItem.desc.includes(descrSearchText)) {
//       listElement.innerHTML += renderKitten(kittenItem);
//     }
//   }
// }
debugger;
// nueva
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const kittensFiltered = kittenDataList.filter((kitten) =>
    kitten.desc.toLowerCase().includes(descrSearchText)
  );

  listElement.innerHTML = '';
  for (const li of kittensFiltered) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

// function handleInput() {
//   const inputValue = inputElement.value;
//   const listFiltered = adalabers.filter((persona) =>
//     persona.name.toLowerCase().includes(inputValue)
//   );
//   // tenemos variables locales, vorem.
//   paintList(listFiltered);
// }

searchButton.addEventListener('click', filterKitten);
