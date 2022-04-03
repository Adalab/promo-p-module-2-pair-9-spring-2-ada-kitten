const inputRace = document.querySelector('.js-input-race');

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' || valuePhoto !== '' || valueName !== '') {
      labelMesageError.innerHTML = '¡Yihiii un nuevo gatito adalabero!';
    }
  }
}
/*kittenDataList.push(newKittenDataObject);

  renderKittenList(kittenDataList);
}*/

buttonAdd.addEventListener('click', addNewKitten);
