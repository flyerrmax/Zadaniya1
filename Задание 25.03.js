let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
alert("Вы посмотрели" + " " + numberOfFilms + " " + "фильмов");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function detectPersonalLevel(){
if (numberOfFilms < 10){
    alert('Просмотрено довольно мало фильмов')
    }
    else if (numberOfFilms >= 10 && numberOfFilms <=30){
    alert('Вы классический зритель')
    }
    else if (numberOfFilms > 30){
    alert('Вы киноман')
    }
    else{
    alert('Произошла ошибка')
    }
}
detectPersonalLevel();
//3
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');   
        if(a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');
        }
        else{
            console.log('error');
            i--; 
        }
    }
}
rememberMyFilms(); 

function showMyDB(){
    if(personalMovieDB.private == false){
        console.log(personalMovieDB); 
    }
}
showMyDB();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genres = prompt(`Ваш любимый жанр номер ${i}`);
        personalMovieDB.genres[i - 1] = genres;
    }
}
writeYourGenres(); 

console.log(personalMovieDB);