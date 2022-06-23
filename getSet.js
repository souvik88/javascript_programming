class person { // creating a class called 'person'
    constructor(name, age, occupation) { // creating a constructor function
        this.name = name
        this.age = age
        this.occupation = occupation
    }
    get getName() {
        return this.name;
    }
    
    set setName(val) {
        this.name = val;
        console.log("New name is ", this.name);
        console.log(`The new name ${this.name} has ${val.length} alphabets`);
    }
}

var human = new person("Souvik", 34, "web developer");

console.log("Name of the person is ", human.getName);
human.setName = "Souvik.k";
