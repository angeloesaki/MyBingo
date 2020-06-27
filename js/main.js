"use strict";

{
  //以下、数字が規則的に増えているのでfor文ループで短縮
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const source = [];
  for (let i = 0; i < 15; i++) {
    source[i] = i + 1;
  }

  //B列の配列
  const b = [];
  //splice()は第一引数に削除し取得したい値の配列のインデックス番号を入れる。第二引数でそこから何個の値を削除し、取得したいかの数字を入れる。
  //b[0], b[1], b[2]と規則的に数字が増えているので、for文で短縮
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

  for (let i = 0; i < 5; i++) {
    b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  }

  //spliceの返り値は複数になることもあり、要素が１つでも配列になってしまうため、配列bの中の要素がそれぞれ配列になってしまう。つまり、配列bの中に５個の１つの要素しか持たない配列が入っている状態。
  //splice()の後に[0]を付ければ解決→なぜ？
  console.log(b);
}
