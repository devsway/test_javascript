function push_button(nini_no_evnt_function){
    console.log("イベントが始まるよ！");
    //ボタンがpushされたらイベントを発火させるよ
    //そのイベントとは...引数に書いて設定できるよ！
    //それによって応用が効くよ！
    nini_no_evnt_function();
}

push_button(function () {
    console.log("ボタンが押されたよ！");
})

push_button(function () {
    console.log("もういっちょ！");
})

/**
 * 続いて引数を渡す場合を書いてみるよ
 * @param event2
 */
function push_button2(event2) {
    console.log("ボタンが押されたよ");
    var params = "あとは任せたぜ。。";
    event2(params);
}

push_button2(function (params) {
    console.log(params+"...って言われました！");
})

