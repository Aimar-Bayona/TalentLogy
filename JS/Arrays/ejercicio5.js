/*Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.*/

let n = [6,2,1,3,4,5,0,9,8,7]
let acum = 0

for (let i = 0; i < n.length; i++) {
    acum += n[i];
}

console.log("media " + acum/n.length);
console.log("mayor " +n.sort().pop());
console.log("menor " +n.sort().shift());