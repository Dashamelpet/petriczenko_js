/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



function detectedPersonalMowie() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    }
    else {
        alert('Произошла ошибка');
    }
}
detectedPersonalMowie();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let lastFilm = prompt('Один из последних просмотренных фильмов?');
        let ratingFilm = prompt('На сколько оцените его?');  
    
        if(lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50) {
          personalMovieDB.movies[lastFilm] = ratingFilm;  
        }
        else 
            i--;
    } 
}
rememberMyFilms();


function showMyDB() {
   if (personalMovieDB.privat == false) {
    console.log(personalMovieDB)
   } 
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genresAsk = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genresAsk;
    }
}
writeYourGenres();