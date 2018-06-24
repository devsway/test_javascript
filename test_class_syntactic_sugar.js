/**
 * これは下の下記と同じです。
 */
class Animal {
    overview() {
        console.log("これはAnimalです");
    }
}

var test = new Animal();
test.overview();

/**
 * 継承してみる。
 */
class Dog extends Animal {
    overview2() {
        console.log("さらに加えてこいつは犬です。わんわん");
    }
}

var test2 = new Dog();
test2.overview();
test2.overview2();

/**
 * 糖衣構文「でない」書き方で書いてみる
 */

var Animal2 = function () {
    /**
     * この書き方でもいいが、、この書き方だとインスタンス化するたびに、this.overviewのメモリをとってしまう。。(らしい)
     */
     this.overview = function(){
        console.log("この書き方でもいいが、");
    }
    /**
     * というわけで共通のところはprototypeに用意するのが良い模様です。
     */
    Animal2.prototype.overview=function () {
        console.log("prototype！");
    };

}

var test3 = new Animal2();
test3.overview();
/**
 * 継承もやってみましょう。
 */

/**
 * まずコンストラクタを作ります。
 * そうすると必然的にprototypeも作られます。
 * @constructor
 */
function Dog2() {
    //この時点でprototypeが作られます。
}

/**
 * prototypeベース継承を行います
 * 継承するのはAnimal2.prototypeです。Animal2自体は(コンストラクタ)関数なので継承できません。
 * @type {Animal2}
 */
Dog2.prototype = Object.create(Animal2.prototype,{
    overview2:{
        value:function () {
            console.log("犬です、わんわん");
        }
    }
})

var test4 = new Dog2();
test4.overview2();
//継承もとのやつも表示できることを確認しましょう
test4.overview();
