# 함수 
## 함수 선언문
```js
function sayHello(name) {
  console.log(`Hello ${name}`);
}
```
default 값 설정하는 방법 1
```js
function sayHello(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello(); // "Hello, friend"
sayHello("Jane"); // "Hello, Jane"
```
default 값 설정하는 방법 2
```js
function sayHello(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}
```
## 함수 표현식
```js
let sayHello = function() {
  console.log("Hello!");
};
```
### 함수 선언문과 표현식의 차이
* 함수 선언문
    * 어디서든 호출 가능
    * 자바스크립트 내에서 호이스팅됨
* 함수 표현식
    * 먼저 선언되야지 사용 가능

## 화살표함수
기본 표현식
```js
let add = function(num1, num2) {
  return num1 + num1;
};
```
화살표 함수 적용
```js
let add = (num1, num2) => {
  return num1 + num1;
};
```
return 부분을 괄호 처리 가능
```js
let add = (num1, num2) => (
   num1 + num1;
);
```
함수 내 전체 코드가 한 줄짜리 return이라면 괄호 생략 가능
```js
let add = (num1, num2) => num1 + num1;
```
인수가 한 개하면 괄호 생략 가능
```js
let sayHello = name => `Hello, ${name}`;
```
인수가 없으면 괄호 생략 불가능
```js
let showError = () => {
  alert("Error!");
};
```
  ## 함수 팁
  * 한 번에 한 작업에 집중
  * 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
      * showError
      * getName
      * createUserData
      * checkLogin