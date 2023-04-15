// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "1938366353173762";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const getHeroDiv = document.getElementById("heroButton");
const heroImageDiv = document.getElementById("heroImage");
const searchButtonDiv = document.getElementById("searchButton");

const searchInputDiv = document.getElementById("searchInput");

const superHeroNameDiv = document.getElementById("superHeroName");

const superHeroIdDiv = document.getElementById("superHeroId");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      //document.querySelector("body")
     
      showStatsInfo(json)
      

     
      
      
    });
};


/*
getSuperHero(245);

const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

document.querySelector('body').innerHTML += `<img src="${img}"/>`
*/

const showStatsInfo = (character) => {
  const name = `<h2>${character.name}<h2>`
  const img = `<img src="${character.image.url}" height = 200 width = 200/>`


  const stats = Object.keys(character.powerstats).map(stat =>{
    return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImageDiv.innerHTML = `${name}${img}${stats}`;
  
}


const getSearchSuperHero = (name) => {
  //console.log()
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);
      showStatsInfo(hero)

      

      
     // heroImageDiv.innerHTML = `<img src= "${hero.image.url}" height = 200 width = 200/>`;
    
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};
getHeroDiv.onclick = () => getSuperHero(randomHero());
searchButtonDiv.onclick = () => getSearchSuperHero(searchInput.value);
