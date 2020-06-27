"use strict";

{
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      //列が増えるごとに15足せばいい
      //1...15
      // source[i] = i + 1;
      // source[i] = i + 1 + 15 * 0;
      //16...30
      // source[i] = i + 1 + 15;
      // source[i] = i + 1 + 15 * 1;
      //31...45
      // source[i] = i + 1 + 15 + 15;
      // source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col;
    }

    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(
        Math.floor(Math.random() * source.length),
        1
      )[0];
    }

    //ランダムで抽出された５つの要素を並べた配列を返す。
    //例）B配列の場合... column[3, 13, 5, 1, 12]  ←をcreateColumn(0)に返す。そしてcolumns[0]が作られる。
    return column;
  }

  function createColumns() {
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
      // //BINGOのそれぞれのカラムの配列
      // const columns = [];
      // //B
      // columns[0] = createColumn(0);
      // //I
      // columns[1] = createColumn(1);
      // //N
      // columns[2] = createColumn(2);
      // //G
      // columns[3] = createColumn(3);
      // //O
      // columns[4] = createColumn(4);
    }
    //FREEにしたい箇所（真ん中）
    //columnsの２番目の要素の２つ目の要素
    columns[2][2] = "FREE";
    return columns;
  }

  //配列の配列のようなデータ構造はconsole.table()で見やすく表示できる
  // console.table(columns);

  function createBingo(columns) {
    //配列の行と列を反転
    const bingo = [];
    for (let row = 0; row < 5; row++) {
      //行を作成
      bingo[row] = [];
      for (let col = 0; col < 5; col++) {
        //行と列を反転
        bingo[row][col] = columns[col][row];
      }
    }
    // console.table(bingo);
    return bingo;
  }

  // ビンゴシートを動的に生成
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 5; col++) {
      const td = document.createElement("td");
      td.textContent = bingo[row][col];
      tr.appendChild(td);
    }
    document.querySelector("tbody").appendChild(tr);
  }
}

//以下、数字が規則的に増えているのでfor文ループで短縮
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const source = [];
// for (let i = 0; i < 15; i++) {
//   source[i] = i + 1;
// }

//B列の配列
// const b = [];
//splice()は第一引数に削除し取得したい値の配列のインデックス番号を入れる。第二引数でそこから何個の値を削除し、取得したいかの数字を入れる。
//b[0], b[1], b[2]と規則的に数字が増えているので、for文で短縮
// b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
// b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
// b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
// b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
// b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

// for (let i = 0; i < 5; i++) {
//   b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
// }

//spliceの返り値は複数になることもあり、要素が１つでも配列になってしまうため、配列bの中の要素がそれぞれ配列になってしまう。つまり、配列bの中に５個の１つの要素しか持たない配列が入っている状態。
//splice()の後に[0]を付ければ解決→なぜ？ 配列の何番目の要素の０番目の要素となるから？
// console.log(b);
