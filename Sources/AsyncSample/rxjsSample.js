const { Observable } = require('rxjs');

let asyncOne = setTimeoutAsync(0);
let asyncTwo = setTimeoutAsync(3000);
let asyncThree = setTimeoutAsync(1000);

Observable.forkJoin(asyncOne, asyncTwo, asyncThree).subscribe(() => {
    console.log('Alle fertig!');
});

asyncOne.subscribe(() => {
    console.log('Aufruf 1');
});
asyncTwo.subscribe(() => {
    console.log('Aufruf 2');
});
asyncThree.subscribe(() => {
    console.log('Aufruf 3');
});

function setTimeoutAsync(count) {
    return new Observable(observer => {
        setTimeout(() => {
            observer.next();
            observer.complete();
        }, count);
    });
}

// function setTimeoutAsync(count) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve('Blub!');
//         }, count);

//     });
// }