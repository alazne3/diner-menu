const type = [
    'Desayunar',
    'Comer',
    'Cenar'
]

const breakfastMain = {
    'Café': 2.30,
    'Infusión': 2.00,
    'Zumo de naranja': 2.55,
    'Cola Cao': 3.00
};

const breakfastSide = {
    'Sandwich': 8.20,
    'Huevos fritos con bacon': 9.00,
    'Ensalada de frutas': 8.00,
    'Tostadas': 4.00,
    'Tarta de queso': 5.50,
    'Yogur con fruta y muesli': 4.50
};

const mainCourses = {
    'Lubina a baja temperatura': 21.00,
    'Tataki de atún': 22.00,
    'Chuletón de vaca': 59.00,
    'Costilla': 18.50
};

const sideChoices = {
    'Ensalada de tomate rosa': 16.00,
    'Carpaccio de vieira': 19.00,
    'Tabla de ibéricos': 19.00,
    'Mejillones de roca': 12.50,
    'Croquetas variadas': 13.50,
    'Alcachofas': 17.00
};

const comments = [
    '¡Muy buena elección!',
    'La especialidad de la casa',
    '¡Te va a encantar!',
    '¡Riquísimo!',
    'Seguro que te sorprende',
    'Uno de mis favoritos',
    '¡Delicioso!',
    'Tenemos una receta secreta para esto',
    'Una obra maestra culinaria',
    '¡Exquisito!',
    'Hará vibrar todos tus sentidos',
    'Un viaje de sabores'
];

let brMn = '';
for (var key in breakfastMain) {
    brMn += key + " => " + breakfastMain[key].toFixed(2) + " €" + '\n';
};

let brMnOp = '';
for (var key in breakfastMain) {
    brMnOp += key + '\n';
};

let brSd = '';
for (var key in breakfastSide) {
    brSd += key + " => " + breakfastSide[key].toFixed(2) + " €" + '\n';
};

let brSdOp = '';
for (var key in breakfastSide) {
    brSdOp += key + '\n';
};

let lunchMn = '';
for (var key in mainCourses) {
    lunchMn += key + " => " + mainCourses[key].toFixed(2) + " €" + '\n';
};

let dinnerMn = '';
for (var key in mainCourses) {
    dinnerMn += key + " => " + (mainCourses[key] * 1.4).toFixed(2) + " €" + '\n';
};

let ldMnOp = '';
for (var key in mainCourses) {
    ldMnOp += key + '\n';
};

let lunchSd = '';
for (var key in sideChoices) {
    lunchSd += key + " => " + sideChoices[key].toFixed(2) + " €" + '\n';
};

let dinnerSd = '';
for (var key in sideChoices) {
    dinnerSd += key + " => " + (sideChoices[key] * 1.4).toFixed(2) + " €" + '\n';
};

let ldSdOp = '';
for (var key in sideChoices) {
    ldSdOp += key + '\n';
};

function welcome() {
    alert("¡Bienvenido/a a Bottega Diner!"+'\n'+
    "¿Qué te gustaría hacer hoy?");

    let bld;
    do {bld = prompt('Desayunar, Comer o Cenar')
    } while (type.includes(bld, 0) === false && bld);

    if (bld === 'Desayunar') {
        breakfast();
    } else if (bld === 'Comer') {
        lunch();
    } else if (bld === 'Cenar') {
        dinner();
    };
};

function breakfast() {
    alert("Para desayunar tenemos "+'\n'+brMn);

    let brMnSelection;
    do {brMnSelection = prompt("¿Cuál es tú elección?"+'\n'+brMnOp)
    } while (brMnSelection in breakfastMain === false && brMnSelection);
    
    let brMnSelectionPrice = breakfastMain[brMnSelection];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu desayuno con "+'\n'+brSd);

    let brSdSelection1;
    do {brSdSelection1 = prompt("¿Qué te apetece?"+'\n'+brSdOp)
    } while (brSdSelection1 in breakfastSide === false && brSdSelection1);
    
    let brSdSelection1Price = breakfastSide[brSdSelection1];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brSdSelection1Price.toFixed(2)+" €");

    let brSdSelection2;
    do {brSdSelection2 = prompt("¿Algo más?"+'\n'+brSdOp)
    } while (brSdSelection2 in breakfastSide === false && brSdSelection2);
    
    let brSdSelection2Price = breakfastSide[brSdSelection2];
    if (brSdSelection1 === brSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+brSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brSdSelection2Price.toFixed(2)+" €")};

    alert("El total del desayuno es "+(brMnSelectionPrice + brSdSelection1Price + brSdSelection2Price).toFixed(2)+" €");
}

function lunch() {
    alert("Para comer tenemos "+'\n'+lunchMn);

    let lunchMnSelection;
    do {lunchMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp)
    } while (lunchMnSelection in mainCourses === false && lunchMnSelection);
    
    let lunchMnSelectionPrice = mainCourses[lunchMnSelection];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu comida con "+'\n'+lunchSd);

    let lunchSdSelection1;
    do {lunchSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp)
    } while (lunchSdSelection1 in sideChoices === false && lunchSdSelection1);
    
    let lunchSdSelection1Price = sideChoices[lunchSdSelection1];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchSdSelection1Price.toFixed(2)+" €");

    let lunchSdSelection2;
    do {lunchSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp)
    } while (lunchSdSelection2 in sideChoices === false && lunchSdSelection2);
    
    let lunchSdSelection2Price = sideChoices[lunchSdSelection2];
    if (lunchSdSelection1 === lunchSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+lunchSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchSdSelection2Price.toFixed(2)+" €")};

    alert("El total de la comida es "+(lunchMnSelectionPrice + lunchSdSelection1Price + lunchSdSelection2Price).toFixed(2)+" €");
}

function dinner() {
    alert("Para cenar tenemos "+'\n'+dinnerMn);

    let dinnerMnSelection;
    do {dinnerMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp)
    } while (dinnerMnSelection in mainCourses === false && dinnerMnSelection);
    
    let dinnerMnSelectionPrice = mainCourses[dinnerMnSelection] * 1.4;
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu cena con "+'\n'+dinnerSd);

    let dinnerSdSelection1;
    do {dinnerSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp)
    } while (dinnerSdSelection1 in sideChoices === false && dinnerSdSelection1);
    
    let dinnerSdSelection1Price = sideChoices[dinnerSdSelection1] * 1.4;
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerSdSelection1Price.toFixed(2)+" €");

    let dinnerSdSelection2;
    do {dinnerSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp)
    } while (dinnerSdSelection2 in sideChoices === false && dinnerSdSelection2);
    
    let dinnerSdSelection2Price = sideChoices[dinnerSdSelection2] * 1.4;
    if (dinnerSdSelection1 === dinnerSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+dinnerSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerSdSelection2Price.toFixed(2)+" €")};

    alert("El total de la cena es "+(dinnerMnSelectionPrice + dinnerSdSelection1Price + dinnerSdSelection2Price).toFixed(2)+" €");
}

function goodbye() {
    alert("¡Muchas gracias por venir Bottega Diner!"+'\n'+
    "¡Esperamos verte pronto de nuevo!");
}

function dinerMenu() {
    welcome();
    goodbye();
}

dinerMenu();