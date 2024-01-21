// 1 задание

let text = "Я изучаю JavaScript";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
let Symbol3 = text[2];
console.log(Symbol3);
console.log(firstSymbol);
console.log(lasttSymbol);

 
/*
2 задание Можем ли мы заменить в строке:
Я изучаю JavaScipt
символ ю на другой? Если да, то как?
Можем ли заменить слово JavaScript на 'Frontend`? */

let text1 = "Я изучаю JavaScript";
let res = a.replace(/JavaScript/gi, 'Frontend');
let rest = a.replace('ю', 'л');
console.log(res);
console.log(rest);

/*
3 zad
 Дан массив элементов

[cat, dog, parrot, horse]
Как узнать индекс элемента parrot?
*/
let arrr = ['cat', 'dog', 'parrot', 'horse',];
console.log(arrr); //когда на консоли появится матрица, будет подписан индекс каждого элемента?



/* 4 zadv 
Дан массив элементов

[cat, dog, parrot, horse, fish, chicken, lion]
Как удалить элемент fish?
Как удалить элемент cat?
Как удалить последние 2 элемента?

*/
let arrt = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion',];
arrt.splice(4,1);
console.log(arrt)

let arrt1 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion',];
arrt1.splice(5,2);
console.log(arrt1)


let arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion',];
arr.shift();
console.log(arr)



/*  Дан массив: 

[31, 10, 'chicken', 9, 'fish', 10]
Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?

Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10? */

let arr2 = [ 31, 10, 'chicken', 9, 'fish', 10,]
function only10(n){
    return typeof n == 10 ;
}
let arr3 = arr2.filter(only10)

let arr5 = [ 31, 10, 'chicken', 9, 'fish', 10,]
let strings = arr5.filter(n => typeof n === 'string');