// var Citizen = function(name, country){
//     this.name = name;
//     this.country = country;

//     // this.printDetails = function() {
//     //     console.log('Citizen ' + this.name + ' from ' + this.country);
//     // }
// };

// Citizen.prototype = {
//     printDetails: function() {
//         console.log('Citizen ' + this.name + ' from ' + this.country);
//     }
// }

// var c = new Citizen("Assman", "Jabudi")
// c.printDetails()

var Citizen = {
    setCitizen: function(name, country) {
        this.name = name;
        this.country = country;
        return this;
    },
    printDetails: function() {
        console.log('Citizen ' + this.name +
         ' from ' + 
         this.country);
    }
};

var Winner = Object.create(Citizen);

Winner.setWinner = function(name, country, category, year) {
    this.setCitizen(name, country);
    this.category = category;
    this.year = year;
    return this;
};

Winner.printDetails = function() {
    console.log('Nobel winner ' + 
    this.name + ' from ' +
    this.country + ', category ' +
    this.category + ', year ' +
    this.year);
}

var w = Object.create(Winner).setWinner("Albert E", 
    "Jabudi", "Ass", "1969");
w.printDetails()