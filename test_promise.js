/**
 * step1 これでプロミスオブジェクトを作成します。
 *
 * @type {Promise}
 */
var 行けたら行く = new Promise(
    //resolveは成功パターン
    //rejectは失敗パターン
    function (resolve, reject) {
        resolve("引数を与えることもできます");
        reject();
    }
);

/**
 * step2　実行用の関数を用意
 * Promiseオブジェクトで作られたオブジェクトはthenとcatchの概念を持つ。
 */
実行用 = function () {
    行けたら行く.then(function () {
        console.log("チャリで行く");
    }).catch(function () {
        console.log("体調悪いから休むわ。。");
    })
}

function これでもいいみたい() {
    行けたら行く
        .then(function (aaa) {
            console.log(aaa);
            console.log("チャリで行く");
        }).catch(function () {
        console.log("体調悪いから休むわ。。");
    })
}

実行用();
これでもいいみたい();

/**
 * step3 チェインしてみよう
 * Promiseオブジェクトはチェインしてシーケンシャルに処理することができるぞ！
 * Promiseオブジェクトを作りまくろう！
 */

var 脚はどうするか実行 = function (引数うけとれるように) {
    return new Promise(
        function (resolve, reject) {
            resolve(引数うけとれるように + "。。。。こんなふうに。。。🍹");
            reject();
        }
    )
}

/**
 * チェイン実行
 */
function これでもいいみたい_リターンズ() {
    行けたら行く
        .then(脚はどうするか実行)
        .then(function (aaaa) {
            console.log(aaaa);
            console.log("タクシーで行く");
        }).catch(function (err) {
        console.log(err);
        console.log("体調悪いから休むわ。。");
    })
}

これでもいいみたい_リターンズ();

