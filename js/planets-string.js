(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    var planetsAsString = planetsArray.join("|");
    console.log(planetsAsString);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var listPlanets = planetsString.split("|");
    var brlistPlanets = "<br>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</br>";
    console.log(listPlanets);
    console.log(brlistPlanets);

    /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var listPlanets = planetsString.split("|");
    // var ullistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    // console.log(listPlanets);
    // console.log(ullistPlanets);
//
})();