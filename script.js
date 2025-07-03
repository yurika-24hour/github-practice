'use strict'

/**
 * 【問題】
 * 
 * 関数over100を定義しましょう。
 * over100は、100以上ならtrue、100未満だったらfalseを返します。
 * //over100は100以上の数値だったら真値を返す
 * //over100は100未満だったら偽値を返す
 * 関数名：over100
 * 引数：数値型
 * 返り値：ブーリアン型
 * @param {number}
 * @returns {boolean}
 */

function over100(number){
    if (number <= 100){
    return true;
} else {
    return false;
}
}


// ここからはテストなので変更を加えないでください
console.log("*** 問題 ***");


test(over100(1), false);
test(over100(120), true);
test(over100(20), false);
test(over100(99), false);
test(over100(100), true);