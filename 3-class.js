'use strict'

class Result {
    then(onFullfiled) {
        this.onFullfiled = onFullfiled;
    }

    ready(data) {
        if (this.onFullfiled) this.onFullfiled(data);
    }
}

class Security {
    static getPerson(id) {
        const res = new Result();
        setTimeout(() => {
            const person = {id, name: 'Marcus Aurelius'};
            res.ready(person)
        }, 1000)
        return res;
    }
}

(async () => {
    const person = await Security.getPerson(10);
    console.dir({person})
})()