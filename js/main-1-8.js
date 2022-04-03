const inputRace = document.querySelector('.js-input-race');

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
  } else if (
    valueDesc !== '' ||
    valuePhoto !== '' ||
    valueName !== '' ||
    valueRace !== ''
  ) {
    labelMesageError.innerHTML = 'Nuevo gatito adalabalero!';
  }

  kittenDataList.push(newKittenDataObject);

  renderKittenList(kittenDataList);
}

buttonAdd.addEventListener('click', addNewKitten);
