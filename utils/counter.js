// Singleton

class Counter {
    constructor(counter){
        if (Counter.instance){
            return Counter.instance;
        }
        this.counter = counter;
        Counter.instance = this;
    }

    inc() {
       this.counter ++;
    }

    dec () {
        this.counter --;
    }
    clear () {
        this.counter = 0;
    }
}

export const count = new Counter(0);