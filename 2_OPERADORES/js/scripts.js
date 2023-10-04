// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Op. aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(5 + (4 * 2));

// 3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log(`Mais um texto`);
console.log(`13`);

console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);
console.log(typeof `13`);

// 5 - Símbolos especiais em string
console.log("Text em \n Duas Linhas");

console.log("Espaçamento \t de tab")

// 6 - Concatenação

console.log("Meu" + "texto" + "combinado");

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2+2}`);

// 8 - Boolean
console.log(true);

console.log(5 > 20);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

// 11 - Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matehus" === 1);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Conversão de tipo automática
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);