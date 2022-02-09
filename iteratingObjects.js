var countries = {'North America': 'USA', 'Europe': 'UK', 'Asia': 'Japan'};

for(var places in countries) {
    console.log("\n");
    console.log(`Continent ${places} and Country ${countries[places]}`);
    console.log("\n");
}
