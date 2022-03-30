(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return (Math.PI * (circle.radius *  circle.radius));
        },

        logInfo: function (doRounding) {

        if(!Number.isInteger(this.getArea())){
            console.log(Math.round(circle.getArea()));
        } else {
            console.log(circle.getArea());
        }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;
    console.log(circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();