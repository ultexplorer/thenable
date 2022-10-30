'use strict'

const getNumbers = () => ({
    numbers: [1, 2, 3],
    then(onFulLfilled, onRejected) {
        const num = this.numbers.shift();
        if (num) {
            return onFulLfilled(num);
        } else {
            onRejected(new Error('I have no numbers for you'));
        }
    }
});

// const next = getNumbers();
// next.then(x => console.log(x))
// next.then(x => console.log(x))
// next.then(x => console.log(x))
// next.then(x => console.log(x))


(async () => {
    const next = getNumbers();
    for (let i = 0; i < 5; i++) {
        try {
            const res = await next;
            console.dir({res});
        } catch (err) {
            console.dir({err: err.message});
        }
    }
})();