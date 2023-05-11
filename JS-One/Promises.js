const greeter = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Hello World');
        } else {
            reject('Goodbye World 💣  💥');
        }
    }, 2000);
})

greeter.then((data) => console.log('success: ', data), (error) => console.log('error: ', error));

// d.catch((error) => console.log('error: ', error));