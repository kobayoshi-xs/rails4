let numbers = ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbol = ['+', '-', '*', '/', '.'];
let numbers_box = ['00'];/*配列numbersの処理*/
let symbol_box = [];/*配列symbolの処理*/
let numbers_sub_box = [];/*'0'と'00'の処理*/
let symbol_sub_box = [];/*'.'の処理*/
let k = [];/*'数字'＋'.'とした時'0'を表示する処理*/

function app(_v) {
  let d = document.querySelector( 'input' ).value += numbers[_v];
  numbers_box.push('dummy');
  symbol_box = [];
  numbers_sub_box = [];
  k = [];
}

function app2(_v) {
  if (numbers_box == 0){
    document.querySelector( 'input' ).value += numbers[1];
    document.querySelector( 'input' ).value += symbol[4];
    numbers.push('dummy')
    symbol_box.push('dummy');
    symbol_sub_box.push('dummy');
  }else if (numbers_sub_box != 0) {
    document.querySelector( 'input' ).value += numbers[1];
    document.querySelector( 'input' ).value += symbol[4];
    numbers_sub_box = [];
    symbol_sub_box.push('dummy');
    symbol_box = [];
  }else if (numbers_sub_box == 0){
    document.querySelector( 'input' ).value += numbers[_v];
    k = [];
  }else {
    let d = document.querySelector( 'input' ).value += numbers[_v];
    numbers_box.push('dummy');
    k = [];
  }
}

function app3(_v) {
  if (symbol_sub_box != 0){
    document.querySelector( 'input' ).value += '';
  }else if (numbers_box == 0){
    let e = document.querySelector( 'input' ).value += numbers[1];
    let f = document.querySelector( 'input' ).value += symbol[4];
    numbers_box.push('dummy');
    symbol_sub_box.push('dummy');
  }else if (symbol_box != 0){
    let e = document.querySelector( 'input' ).value += numbers[1];
    let f = document.querySelector( 'input' ).value += symbol[4];
    numbers_box.push('dummy');
    symbol_sub_box.push('dummy');
    /*k.push('dummy');*/
    numbers_sub_box = [];
  }else {
    let h = document.querySelector( 'input' ).value += symbol[_v];
    symbol_sub_box.push('dummy');
    k.push('dummy');
  }
}

function sum(_v) {
  if (numbers_box == 0){
    document.querySelector( 'input' ).value = '';
  }else if (symbol_box != 0){
    document.querySelector( 'input' ).value += '';
  }else if (symbol_sub_box != 0 && k != 0){
    let i = document.querySelector( 'input' ).value += numbers[1];
    let j = document.querySelector( 'input' ).value += symbol[_v];
    symbol_box.push('dummy');
    numbers_sub_box.push('dummy');
    symbol_sub_box = [];
    k = [];
  }else {
    let h = document.querySelector( 'input' ).value += symbol[_v];
    symbol_box.push('dummy');
    numbers_sub_box.push('dummy');
    symbol_sub_box = [];
  }
}

function cle(_v) { 
  document.querySelector( 'input' ).value = _v;
  numbers_box = [];
}

function calc() {
  let answer = document.querySelector( 'input' ).value;
  let g = new Function( 'return ' + answer );
  cle( g().toString() );
  numbers_box.push('dummy');
}