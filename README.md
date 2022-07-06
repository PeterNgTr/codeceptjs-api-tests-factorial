# Introduction

This project demonstrates how to use CodeceptJS with REST helper.

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://qainterview.pythonanywhere.com> - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd codeceptjs-api-tests-factorial
npm i
```

### How to trigger API tests

To run all api tests just simply type

```sh
npm test
```

Example output

```sh
CodeceptJS v3.3.0
Running tests in 10 workers...

[04]   ✔ Verify valid returned result - non number in 411ms
[02]   ✔ Verify valid returned result - number 1 in 427ms
[05]   ✔ Verify valid returned result - invalid key in form data in 433ms
[03]   ✔ Verify valid returned result - number 0 in 399ms
[01]   ✔ Verify 200 status code in 398ms

  OK  | 5 passed   // 4s

```
