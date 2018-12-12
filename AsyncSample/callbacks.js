try {
    console.log('Hello');

    setTimeout(() => {
        try {
            console.log('Aufruf 1');

            setTimeout(() => {
                console.log('Aufruf 2');

                throw new Error('Blub!!! WAHHHH!');

                setTimeout(() => {
                    console.log('Aufruf 3');
                }, 0);
            }, 0);
        } catch (error) {
            console.log('Fehler: ' + error.message);
        }
    }, 0);

    console.log('World');
} catch (error) {
    console.log('Fehler: ' + error.message);
}
