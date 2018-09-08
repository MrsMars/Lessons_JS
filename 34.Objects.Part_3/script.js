var country = {
    
    name: "USA",
    language: "english",
    
    capital:{
        name: "Washington",
        population: 33322541,
        year: 1435
    }
    
};

console.log("Capital: " + country.capital.name);                    // Washington
console.log("Population: " + country["capital"]["population"]);     // 33322541
console.log("Year: " + country.capital["year"]);                    // 1435

//////////////////////////////////////////////////////////////////////////////////

var country_2 = {
    
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    
    capital:{ 
        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ]
};

document.write("<h3>Official languages</h3>");
for(var i = 0; i < country_2.languages; i++)
    document.write(country_2.languages[i] + "</br>");

document.write("<h3>Cities</h3>");
for(var i = 0; i < country_2.cities; i++)
    document.write(country_2.cities[i].name + "</br>");



