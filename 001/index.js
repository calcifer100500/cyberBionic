/**
 * task 01
 * */
function Box(h,w,dep) {
    this.Height = h;
    this.Width = w;
    this.Depth = dep;

    this.volume = function() {
        return this.Height * this.Width * this.Depth;
    };
}
let box = new Box(20,40,30);

function createDiv(divClass, title, inner, secondInner) {
    let div = document.createElement('div');
    div.className = divClass;
    document.body.appendChild(div);
    let heading = document.createElement('h2');
    heading.innerHTML = title;
    div.appendChild(heading);
    let p = document.createElement('p');
    p.innerHTML = inner;
    div.appendChild(p);
    let pSecond = document.createElement('p');
    pSecond.innerHTML = secondInner;
    div.appendChild(pSecond);
}

createDiv(
    'first',
    'Task 01',
    'box = '+ box.Height.toString() + ', ' + box.Width.toString() + ', ' + box.Depth.toString(),
    'box volume = ' + box.volume()
);

/**
 * task 02
 * */
function Cats(name, color, age, gender) {
    this.Name = name;
    this.Color = color;
    this.Age = age;
    this.Gender = gender;

    this.sayMeow = function() {
        return 'My name is ' + this.Name + '. ' + 'I am ' + this.Age + '. ' + 'I am ' + this.Color + '. ' + 'I am a ' + this.Gender + '.';
    };
}

let cat1 = new Cats('Tom', 'grey', 10, 'boy');
let cat2 = new Cats('Mia', 'black', 8, 'girl');
let cat3 = new Cats('Jerry', 'white', 5, 'boy');

createDiv(
    'second',
    'Task 02. First cat',
    cat1.sayMeow(),
    ''
);
createDiv(
    'second',
    'Task 02. Second cat',
    cat2.sayMeow(),
    ''
);
createDiv(
    'second',
    'Task 02. Third cat',
    cat3.sayMeow(),
    ''
);

/**
 * task 03
 * */
let arr = [10,32,40,14,56,27];
let humanArr = [];
function Human(age) {
    this.Age = age;
}

for (let i = 0; i < arr.length; i++) {
    let human = new Human(arr[i]);
    humanArr.push(human);
    function compareNumbers(a, b) {
        return a.Age - b.Age;
    }
    humanArr.sort(compareNumbers).reverse();
}

createDiv(
    'first third',
    'Task 03',
    'Origin array with numbers: ' + arr,
    'Human sorted ages: ' + JSON.stringify(humanArr)
);

/**
 * task 04
 * */

function Humanity(name, age, gender, race, language) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.language = language;

    this.sayHi = function() {
        return 'Hi! My name is ' + this.name + '. ' + 'I am ' + this.age + '. ' + 'I am a ' + this.gender + '. ' + 'I am ' + this.race + '. ' + 'I speak ' + this.language + '. '
    }
}

let human1 = new Humanity('Jessica', 18, 'female', 'european', 'english');
let human2 = new Humanity('Li', 29, 'male', 'asian', 'chinese');
let human3 = new Humanity('Oliver', 35, 'male', 'european', 'german');

createDiv(
    'second',
    'Task 04. First human',
    human1.sayHi(),
    ''
);
createDiv(
    'second',
    'Task 04. Second human',
    human2.sayHi(),
    ''
);
createDiv(
    'second',
    'Task 04. Third human',
    human3.sayHi(),
    ''
);