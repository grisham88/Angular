async function doAsync() {
    try {
        let data = await setTimeoutAsync(0);
        console.log('Aufruf 1');
        console.log(data);
        let data2 = await setTimeoutAsync(3000);
        console.log('Aufruf 2');
        let data3 = await setTimeoutAsync(1000);
        console.log('Aufruf 3');
    } catch (error) {

    }
}

doAsync();

function setTimeoutAsync(count) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Blub!');
        }, count);

    });
}