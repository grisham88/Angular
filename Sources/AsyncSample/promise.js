setTimeoutAsync(0).then((data) => {
    console.log('Aufruf 1');
    console.log(data);

    return setTimeoutAsync(0);
}).then((data) => {
    console.log('Aufruf 2');
    console.log(data);

    throw new Error('BLUB! WAAHHH!');

    return setTimeoutAsync(3000);
}).then((data) => {
    console.log('Aufruf 3');
    console.log(data);

    return setTimeoutAsync(1000);
}).catch((error) => {
    console.log('Fehler: ' + error.message);
});

function setTimeoutAsync(count) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Blub!');
        }, count);

    });
}