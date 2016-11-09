function solve() {
    let name = arguments[0];
    let age = Number(arguments[1]);
    let weight = Number(arguments[2]);
    let height = Number(arguments[3]);
    let meters = height/100.00;
    let bmi = Math.round((weight/Math.pow(meters,2)));
    let person = {
        name: name,
        personalInfo:{
            age: age,
            weight: weight,
            height: height
        }
    }
    console.log(bmi)
}

solve("Peter", 29, 75, 182);