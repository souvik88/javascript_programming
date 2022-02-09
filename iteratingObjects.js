/*
variable places is assigned to the keys of the object countries

Using the key to access the value of the object countries, and then the
corresponding values of the object
*/
var countries = {'North America': 'USA', 'Europe': 'UK', 'Asia': 'Japan'};

for(var places in countries) {
    console.log(" ");
    console.log(`Continent ${places} and Country ${countries[places]}`);
    console.log(" ");
}

// output
// Continent North America and Country USA

// Continent Europe and Country UK

// Continent Asia and Country Japan

/*
notes
    for..in loop returns the list of keys on the object being iterated

    for..of lopop return the list of values on the object being iterated
*/