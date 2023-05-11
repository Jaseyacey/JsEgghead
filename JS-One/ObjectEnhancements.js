var bike = "Canyon"
var bikeType = "Triathlon"

var bike = {
    name: "Canyon",
    type: "Triathlon"
}

var bike = {
    name: "Canyon",
    type: "Triathlon",
    getName: function() {
        return this.name;
    },
    getType: function() {
        return this.type;
    }
}

console.log(bike.getName());
console.log(bike.getType());