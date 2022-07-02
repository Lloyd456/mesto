//Открытие и закрытие попапа

let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupKrest = popup.querySelector('.popup__krest');

function popupOpen() {
  popup.classList.remove('popup__none');
}

function popupClose() {
  popup.classList.add('popup__none')
}

editButton.addEventListener('click', popupOpen);
popupKrest.addEventListener('click', popupClose);

//Реализация изменений в профиле

// Находим форму в DOM
let formElement = popup.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#nameInput');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('#jobInput'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let name = nameInput.value
    let profession = jobInput.value
    // Выберите элементы, куда должны быть вставлены значения полей
    let newName = profile.querySelector('.profile__name');
    let newJob = profile.querySelector('.profile__profession');
    // Вставьте новые значения с помощью textContent
    newName.textContent = name;
    newJob.textContent = profession;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
