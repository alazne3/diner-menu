//import * as _ from "https://cdn.skypack.dev/lodash@4.17.21";

const type = [
    'Desayunar',
    'Comer',
    'Cenar'
];

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

    let bld = prompt('Desayunar, Comer o Cenar');
    switch (bld) {
        case 'desayunar':
        case 'desayuno':
            bld = 'Desayunar';
            break;

        case 'comer':
        case 'comida':
            bld = 'Comer';
            break;

        case 'cenar':
        case 'cena':
            bld = 'Cenar';
            break;
    }
    while (type.includes(bld, 0) === false){
        alert("Ups! Esa opción no está disponible");
        bld = prompt('Desayunar, Comer o Cenar');
        switch (bld) {
            case 'desayunar':
            case 'desayuno':
                bld = 'Desayunar';
                break;
    
            case 'comer':
            case 'comida':
                bld = 'Comer';
                break;
    
            case 'cenar':
            case 'cena':
                bld = 'Cenar';
                break;
        }
    };

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

    let brMnSelection = prompt("¿Cuál es tú elección?"+'\n'+brMnOp);
    switch (brMnSelection) {
        case 'café':
        case 'cafe':
        case 'Cafe':
            brMnSelection = 'Café';
            break;
        case 'Infusion':
        case 'infusión':
        case 'infusion':
            brMnSelection = 'Infusión';
            break;
        case 'zumo de naranja':
        case 'zumo':
        case 'naranja':
            brMnSelection = 'Zumo de naranja';
            break;
        case 'cola cao':
        case 'colacao':
        case 'Cola cao':
            brMnSelection = 'Cola Cao';
            break;
    };
    while (brMnSelection in breakfastMain === false){
        alert("Ups! Esa opción no está disponible");
        brMnSelection = prompt("¿Cuál es tú elección?"+'\n'+brMnOp);
        switch (brMnSelection) {
            case 'café':
            case 'cafe':
            case 'Cafe':
                brMnSelection = 'Café';
                break;
            case 'Infusion':
            case 'infusión':
            case 'infusion':
                brMnSelection = 'Infusión';
                break;
            case 'zumo de naranja':
            case 'zumo':
            case 'naranja':
                brMnSelection = 'Zumo de naranja';
                break;
            case 'cola cao':
            case 'colacao':
            case 'Cola cao':
                brMnSelection = 'Cola Cao';
                break;
        };
    };
    
    let brMnSelectionPrice = breakfastMain[brMnSelection];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu desayuno con "+'\n'+brSd);

    let brSdSelection1 = prompt("¿Qué te apetece?"+'\n'+brSdOp);
    switch (brSdSelection1) {
        case 'sandwich':
            brSdSelection1 = 'Sandwich';
            break;
        case 'huevos fritos con bacon':
        case 'Huevos':
        case 'huevos':
            brSdSelection1 = 'Huevos fritos con bacon';
            break;
        case 'ensalada de frutas':
            brSdSelection1 = 'Ensalada de frutas';
            break;
        case 'tostadas':
            brSdSelection1 = 'Tostadas';
            break;
        case 'tarta de queso':
        case 'tarta':
            brSdSelection1 = 'Tarta de queso';
            break;
        case 'yogur con fruta y muesli':
        case 'yogur':
            brSdSelection1 = 'Yogur con fruta y muesli';
            break;
    };
    while (brSdSelection1 in breakfastSide === false){
        alert("Ups! Esa opción no está disponible");
        brSdSelection1 = prompt("¿Qué te apetece?"+'\n'+brSdOp);
        switch (brSdSelection1) {
            case 'sandwich':
                brSdSelection1 = 'Sandwich';
                break;
            case 'huevos fritos con bacon':
            case 'Huevos':
            case 'huevos':
                brSdSelection1 = 'Huevos fritos con bacon';
                break;
            case 'ensalada de frutas':
                brSdSelection1 = 'Ensalada de frutas';
                break;
            case 'tostadas':
                brSdSelection1 = 'Tostadas';
                break;
            case 'tarta de queso':
            case 'tarta':
                brSdSelection1 = 'Tarta de queso';
                break;
            case 'yogur con fruta y muesli':
            case 'yogur':
                brSdSelection1 = 'Yogur con fruta y muesli';
                break;
        };
    };
    
    let brSdSelection1Price = breakfastSide[brSdSelection1];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brSdSelection1Price.toFixed(2)+" €");

    let brSdSelection2 = prompt("¿Algo más?"+'\n'+brSdOp);
    switch (brSdSelection2) {
        case 'sandwich':
            brSdSelection2 = 'Sandwich';
            break;
        case 'huevos fritos con bacon':
        case 'Huevos':
        case 'huevos':
            brSdSelection2 = 'Huevos fritos con bacon';
            break;
        case 'ensalada de frutas':
            brSdSelection2 = 'Ensalada de frutas';
            break;
        case 'tostadas':
            brSdSelection2 = 'Tostadas';
            break;
        case 'tarta de queso':
        case 'tarta':
            brSdSelection2 = 'Tarta de queso';
            break;
        case 'yogur con fruta y muesli':
        case 'yogur':
            brSdSelection2 = 'Yogur con fruta y muesli';
            break;
    };
    while (brSdSelection2 in breakfastSide === false){
        alert("Ups! Esa opción no está disponible");
        brSdSelection2 = prompt("¿Algo más?"+'\n'+brSdOp);
        switch (brSdSelection2) {
            case 'sandwich':
                brSdSelection2 = 'Sandwich';
                break;
            case 'huevos fritos con bacon':
            case 'Huevos':
            case 'huevos':
                brSdSelection2 = 'Huevos fritos con bacon';
                break;
            case 'ensalada de frutas':
                brSdSelection2 = 'Ensalada de frutas';
                break;
            case 'tostadas':
                brSdSelection2 = 'Tostadas';
                break;
            case 'tarta de queso':
            case 'tarta':
                brSdSelection2 = 'Tarta de queso';
                break;
            case 'yogur con fruta y muesli':
            case 'yogur':
                brSdSelection2 = 'Yogur con fruta y muesli';
                break;
        };
    };
    
    let brSdSelection2Price = breakfastSide[brSdSelection2];
    if (brSdSelection1 === brSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+brSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+brSdSelection2Price.toFixed(2)+" €")};

    alert("Tu selección es la siguiente:"+'\n'+
    brMnSelection + " => " + brMnSelectionPrice.toFixed(2)+" €"+'\n'+
    brSdSelection1 + " => " + brSdSelection1Price.toFixed(2)+" €"+'\n'+
    brSdSelection2 + " => " + brSdSelection2Price.toFixed(2)+" €"+'\n'+'\n'+
    "El total del desayuno es "+(brMnSelectionPrice + brSdSelection1Price + brSdSelection2Price).toFixed(2)+" €");
}

function lunch() {
    alert("Para comer tenemos "+'\n'+lunchMn);

    let lunchMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp);
    switch (lunchMnSelection) {
        case 'lubina a baja temperatura':
        case 'lubina':
            lunchMnSelection = 'Lubina a baja temperatura';
            break;
        case 'tataki de atún':
        case 'Tataki de atun':
        case 'tataki de atun':
        case 'Tataki':
        case 'tataki':
            lunchMnSelection = 'Tataki de atún';
            break;
        case 'chuletón de vaca':
        case 'Chuleton de vaca':
        case 'chuleton de vaca':
        case 'chuletón':
        case 'chuleton':
            lunchMnSelection = 'Chuletón de vaca';
            break;
        case 'costilla':
            lunchMnSelection = 'Costilla';
            break;
    }
    while (lunchMnSelection in mainCourses === false){
        alert("Ups! Esa opción no está disponible");
        lunchMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp);
        switch (lunchMnSelection) {
            case 'lubina a baja temperatura':
            case 'lubina':
                lunchMnSelection = 'Lubina a baja temperatura';
                break;
            case 'tataki de atún':
            case 'Tataki de atun':
            case 'tataki de atun':
            case 'Tataki':
            case 'tataki':
                lunchMnSelection = 'Tataki de atún';
                break;
            case 'chuletón de vaca':
            case 'Chuleton de vaca':
            case 'chuleton de vaca':
            case 'chuletón':
            case 'chuleton':
                lunchMnSelection = 'Chuletón de vaca';
                break;
            case 'costilla':
                lunchMnSelection = 'Costilla';
                break;
        }
    };
    
    let lunchMnSelectionPrice = mainCourses[lunchMnSelection];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu comida con "+'\n'+lunchSd);

    let lunchSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp);
    switch (lunchSdSelection1) {
        case 'ensalada de tomate rosa':
        case 'ensalada de tomate':
        case 'ensalada':
            lunchSdSelection1 = 'Ensalada de tomate rosa';
            break;
        case 'carpaccio de vieira':
        case 'carpaccio':
            lunchSdSelection1 = 'Carpaccio de vieira';
            break;
        case 'tabla de ibéricos':
        case 'Tabla de ibericos':
        case 'tabla de ibericos':
        case 'ibéricos':
        case 'ibericos':
            lunchSdSelection1 = 'Tabla de ibéricos';
            break;
        case 'mejillones de roca':
        case 'mejillones':
            lunchSdSelection1 = 'Mejillones de roca';
            break;
        case 'croquetas variadas':
        case 'croquetas':
            lunchSdSelection1 = 'Croquetas variadas';
            break;
        case 'alcachofas':
            lunchSdSelection1 = 'Alcachofas';
            break;
    }
    while (lunchSdSelection1 in sideChoices === false){
        alert("Ups! Esa opción no está disponible");
        lunchSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp);
        switch (lunchSdSelection1) {
            case 'ensalada de tomate rosa':
            case 'ensalada de tomate':
            case 'ensalada':
                lunchSdSelection1 = 'Ensalada de tomate rosa';
                break;
            case 'carpaccio de vieira':
            case 'carpaccio':
                lunchSdSelection1 = 'Carpaccio de vieira';
                break;
            case 'tabla de ibéricos':
            case 'Tabla de ibericos':
            case 'tabla de ibericos':
            case 'ibéricos':
            case 'ibericos':
                lunchSdSelection1 = 'Tabla de ibéricos';
                break;
            case 'mejillones de roca':
            case 'mejillones':
                lunchSdSelection1 = 'Mejillones de roca';
                break;
            case 'croquetas variadas':
            case 'croquetas':
                lunchSdSelection1 = 'Croquetas variadas';
                break;
            case 'alcachofas':
                lunchSdSelection1 = 'Alcachofas';
                break;
        }
    };
    
    let lunchSdSelection1Price = sideChoices[lunchSdSelection1];
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchSdSelection1Price.toFixed(2)+" €");

    let lunchSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp);
    switch (lunchSdSelection2) {
        case 'ensalada de tomate rosa':
        case 'ensalada de tomate':
        case 'ensalada':
            lunchSdSelection2 = 'Ensalada de tomate rosa';
            break;
        case 'carpaccio de vieira':
        case 'carpaccio':
            lunchSdSelection2 = 'Carpaccio de vieira';
            break;
        case 'tabla de ibéricos':
        case 'Tabla de ibericos':
        case 'tabla de ibericos':
        case 'ibéricos':
        case 'ibericos':
            lunchSdSelection2 = 'Tabla de ibéricos';
            break;
        case 'mejillones de roca':
        case 'mejillones':
            lunchSdSelection2 = 'Mejillones de roca';
            break;
        case 'croquetas variadas':
        case 'croquetas':
            lunchSdSelection2 = 'Croquetas variadas';
            break;
        case 'alcachofas':
            lunchSdSelection2 = 'Alcachofas';
            break;
    }
    while (lunchSdSelection2 in sideChoices === false){
        alert("Ups! Esa opción no está disponible");
        lunchSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp);
        switch (lunchSdSelection2) {
            case 'ensalada de tomate rosa':
            case 'ensalada de tomate':
            case 'ensalada':
                lunchSdSelection2 = 'Ensalada de tomate rosa';
                break;
            case 'carpaccio de vieira':
            case 'carpaccio':
                lunchSdSelection2 = 'Carpaccio de vieira';
                break;
            case 'tabla de ibéricos':
            case 'Tabla de ibericos':
            case 'tabla de ibericos':
            case 'ibéricos':
            case 'ibericos':
                lunchSdSelection2 = 'Tabla de ibéricos';
                break;
            case 'mejillones de roca':
            case 'mejillones':
                lunchSdSelection2 = 'Mejillones de roca';
                break;
            case 'croquetas variadas':
            case 'croquetas':
                lunchSdSelection2 = 'Croquetas variadas';
                break;
            case 'alcachofas':
                lunchSdSelection2 = 'Alcachofas';
                break;
        }
    };
    
    let lunchSdSelection2Price = sideChoices[lunchSdSelection2];
    if (lunchSdSelection1 === lunchSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+lunchSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+lunchSdSelection2Price.toFixed(2)+" €")};

    alert("Tu selección es la siguiente:"+'\n'+
    lunchMnSelection + " => " + lunchMnSelectionPrice.toFixed(2)+" €"+'\n'+
    lunchSdSelection1 + " => " + lunchSdSelection1Price.toFixed(2)+" €"+'\n'+
    lunchSdSelection2 + " => " + lunchSdSelection2Price.toFixed(2)+" €"+'\n'+'\n'+
    "El total de la comida es "+(lunchMnSelectionPrice + lunchSdSelection1Price + lunchSdSelection2Price).toFixed(2)+" €");
}

function dinner() {
    alert("Para cenar tenemos "+'\n'+dinnerMn);

    let dinnerMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp);
    switch (dinnerMnSelection) {
        case 'lubina a baja temperatura':
        case 'lubina':
            dinnerMnSelection = 'Lubina a baja temperatura';
            break;
        case 'tataki de atún':
        case 'Tataki de atun':
        case 'tataki de atun':
        case 'Tataki':
        case 'tataki':
            dinnerMnSelection = 'Tataki de atún';
            break;
        case 'chuletón de vaca':
        case 'Chuleton de vaca':
        case 'chuleton de vaca':
        case 'chuletón':
        case 'chuleton':
            dinnerMnSelection = 'Chuletón de vaca';
            break;
        case 'costilla':
            dinnerMnSelection = 'Costilla';
            break;
    }
    while (dinnerMnSelection in mainCourses === false){
        alert("Ups! Esa opción no está disponible");
        dinnerMnSelection = prompt("¿Cuál es tú elección?"+'\n'+ldMnOp);
        switch (dinnerMnSelection) {
            case 'lubina a baja temperatura':
            case 'lubina':
                dinnerMnSelection = 'Lubina a baja temperatura';
                break;
            case 'tataki de atún':
            case 'Tataki de atun':
            case 'tataki de atun':
            case 'Tataki':
            case 'tataki':
                dinnerMnSelection = 'Tataki de atún';
                break;
            case 'chuletón de vaca':
            case 'Chuleton de vaca':
            case 'chuleton de vaca':
            case 'chuletón':
            case 'chuleton':
                dinnerMnSelection = 'Chuletón de vaca';
                break;
            case 'costilla':
                dinnerMnSelection = 'Costilla';
                break;
        }
    };
    
    let dinnerMnSelectionPrice = mainCourses[dinnerMnSelection] * 1.4;
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerMnSelectionPrice.toFixed(2)+" €");

    alert("Puedes acompañar tu cena con "+'\n'+dinnerSd);

    let dinnerSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp);
    switch (dinnerSdSelection1) {
        case 'ensalada de tomate rosa':
        case 'ensalada de tomate':
        case 'ensalada':
            dinnerSdSelection1 = 'Ensalada de tomate rosa';
            break;
        case 'carpaccio de vieira':
        case 'carpaccio':
            dinnerSdSelection1 = 'Carpaccio de vieira';
            break;
        case 'tabla de ibéricos':
        case 'Tabla de ibericos':
        case 'tabla de ibericos':
        case 'ibéricos':
        case 'ibericos':
            dinnerSdSelection1 = 'Tabla de ibéricos';
            break;
        case 'mejillones de roca':
        case 'mejillones':
            dinnerSdSelection1 = 'Mejillones de roca';
            break;
        case 'croquetas variadas':
        case 'croquetas':
            dinnerSdSelection1 = 'Croquetas variadas';
            break;
        case 'alcachofas':
            dinnerSdSelection1 = 'Alcachofas';
            break;
    }
    while (dinnerSdSelection1 in sideChoices === false){
        alert("Ups! Esa opción no está disponible");
        dinnerSdSelection1 = prompt("¿Qué te apetece?"+'\n'+ldSdOp);
        switch (dinnerSdSelection1) {
            case 'ensalada de tomate rosa':
            case 'ensalada de tomate':
            case 'ensalada':
                dinnerSdSelection1 = 'Ensalada de tomate rosa';
                break;
            case 'carpaccio de vieira':
            case 'carpaccio':
                dinnerSdSelection1 = 'Carpaccio de vieira';
                break;
            case 'tabla de ibéricos':
            case 'Tabla de ibericos':
            case 'tabla de ibericos':
            case 'ibéricos':
            case 'ibericos':
                dinnerSdSelection1 = 'Tabla de ibéricos';
                break;
            case 'mejillones de roca':
            case 'mejillones':
                dinnerSdSelection1 = 'Mejillones de roca';
                break;
            case 'croquetas variadas':
            case 'croquetas':
                dinnerSdSelection1 = 'Croquetas variadas';
                break;
            case 'alcachofas':
                dinnerSdSelection1 = 'Alcachofas';
                break;
        }
    };
    
    let dinnerSdSelection1Price = sideChoices[dinnerSdSelection1] * 1.4;
    alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerSdSelection1Price.toFixed(2)+" €");

    let dinnerSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp);
    switch (dinnerSdSelection2) {
        case 'ensalada de tomate rosa':
        case 'ensalada de tomate':
        case 'ensalada':
            dinnerSdSelection2 = 'Ensalada de tomate rosa';
            break;
        case 'carpaccio de vieira':
        case 'carpaccio':
            dinnerSdSelection2 = 'Carpaccio de vieira';
            break;
        case 'tabla de ibéricos':
        case 'Tabla de ibericos':
        case 'tabla de ibericos':
        case 'ibéricos':
        case 'ibericos':
            dinnerSdSelection2 = 'Tabla de ibéricos';
            break;
        case 'mejillones de roca':
        case 'mejillones':
            dinnerSdSelection2 = 'Mejillones de roca';
            break;
        case 'croquetas variadas':
        case 'croquetas':
            dinnerSdSelection2 = 'Croquetas variadas';
            break;
        case 'alcachofas':
            dinnerSdSelection2 = 'Alcachofas';
            break;
    }
    while (dinnerSdSelection2 in sideChoices === false){
        alert("Ups! Esa opción no está disponible");
        dinnerSdSelection2 = prompt("¿Algo más?"+'\n'+ldSdOp);
        switch (dinnerSdSelection2) {
            case 'ensalada de tomate rosa':
            case 'ensalada de tomate':
            case 'ensalada':
                dinnerSdSelection2 = 'Ensalada de tomate rosa';
                break;
            case 'carpaccio de vieira':
            case 'carpaccio':
                dinnerSdSelection2 = 'Carpaccio de vieira';
                break;
            case 'tabla de ibéricos':
            case 'Tabla de ibericos':
            case 'tabla de ibericos':
            case 'ibéricos':
            case 'ibericos':
                dinnerSdSelection2 = 'Tabla de ibéricos';
                break;
            case 'mejillones de roca':
            case 'mejillones':
                dinnerSdSelection2 = 'Mejillones de roca';
                break;
            case 'croquetas variadas':
            case 'croquetas':
                dinnerSdSelection2 = 'Croquetas variadas';
                break;
            case 'alcachofas':
                dinnerSdSelection2 = 'Alcachofas';
                break;
        }
    };
    
    let dinnerSdSelection2Price = sideChoices[dinnerSdSelection2] * 1.4;
    if (dinnerSdSelection1 === dinnerSdSelection2) {alert("¡Doble del mismo acompañante!"+'\n'+
    "El precio es "+dinnerSdSelection2Price.toFixed(2)+" €")
    } else {alert(comments[_.random(0, (comments.length - 1))]+'\n'+
    "El precio es "+dinnerSdSelection2Price.toFixed(2)+" €")};

    alert("Tu selección es la siguiente:"+'\n'+
    dinnerMnSelection + " => " + dinnerMnSelectionPrice.toFixed(2)+" €"+'\n'+
    dinnerSdSelection1 + " => " + dinnerSdSelection1Price.toFixed(2)+" €"+'\n'+
    dinnerSdSelection2 + " => " + dinnerSdSelection2Price.toFixed(2)+" €"+'\n'+'\n'+
    "El total de la cena es "+(dinnerMnSelectionPrice + dinnerSdSelection1Price + dinnerSdSelection2Price).toFixed(2)+" €");
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