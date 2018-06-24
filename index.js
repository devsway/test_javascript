/**
 * クラスの宣言
 */
class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    speak() {
        console.log(this.name + "です、こんにちは");
    }

    toshi_no_sa(num) {
        console.log(15 + num);
        //return 15 + num;
    }
}

Animal.prototype.walk = function () {
    console.log("歩けます");
}


var dog = new Animal("ばでぃ");
dog.speak();
dog.toshi_no_sa(40);
dog.walk();

var chiwawa = new dog();
chiwawa.walk();
