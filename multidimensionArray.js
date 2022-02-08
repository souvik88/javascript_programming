let car = [
    [bmw, mercedes, toyota],
    [suzuki, porche, lamborgini],
    [audi, subaru, ford]
];

for(var i=0; i < car.length; i++) {
    for(var j=0; j < car[i].length; j++) {
        console.log(car[i][j]);
    }
    console.log("the row ends here");
}
console.log("indexing complete");