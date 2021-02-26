/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, document.querySelector(\"#clock\"), \"p\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nnew Clock();\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("const dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction handleEnter() {\n    document.querySelectorAll(\".dog-link\").forEach((link) => {\n      link.classList.remove(\"hidden\");\n    });\n}\n\nfunction handleLeave() {\n  document.querySelectorAll(\".dog-link\").forEach((link) => {\n    link.classList.add(\"hidden\");\n  });\n}\n\nfunction dogLinkCreator () {\n  const objArray = Object.keys(dogs);\n  const dogArray = []\n  objArray.forEach((dog) => {\n    const a = document.createElement(\"a\");\n    // debugger\n    a.innerHTML = dog;\n    a.href = dogs[dog];\n    const li = document.createElement(\"li\");\n    li.classList.add('dog-link');\n    li.classList.add('hidden');\n    li.append(a);\n    dogArray.push(li);\n  })\n  return dogArray;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator();\n  dogLinks.forEach((link) => {\n    document.querySelector(\".drop-down-dog-list\").append(link);\n  });\n}\n\n\nattachDogLinks();\ndocument.querySelector(\".drop-down-dog-nav\").addEventListener(\"mouseenter\", handleEnter);\ndocument.querySelector(\".drop-down-dog-nav\").addEventListener(\"mouseleave\", handleLeave);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/***/ (() => {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst pics = document.querySelectorAll(\".slide\");\n\nwindow.addEventListener(\n  \"scroll\",\n  debounce(() => {\n    pics.forEach((pic) => {\n      const current = pic;\n      const height = current.height;\n      const y = current.y;\n\n      const middle = y;\n\n      if (window.innerHeight > middle) {\n        current.classList.add(\"active\");\n      }\n      if (window.scrollY > y + height) {\n        current.classList.remove(\"active\");\n      }\n    });\n  }, 5)\n);\n\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("let todos;\n\nif (localStorage.getItem(\"todos\")) {\n  todos = JSON.parse(localStorage.getItem(\"todos\"));\n} else {\n  todos = [];\n}\n\nconst ul = document.querySelector(\".todos\");\nconst form = document.querySelector(\".add-todo-form\");\n\nfunction addTodo(event) {\n  event.preventDefault();\n  const currentTodoValue = document.getElementsByName(\"add-todo\")[0].value;\n  const todo = {\n    value: currentTodoValue,\n    done: false,\n  };\n  todos.push(todo);\n  document.getElementsByName(\"add-todo\")[0].value = \"\";\n  const JSONArray = JSON.stringify(todos);\n  localStorage.setItem(\"todos\", JSONArray);\n  populateListItem(todo, todos.length - 1);\n}\n\nfunction populateListItem(item, idx) {\n  const label = document.createElement(\"label\");\n  const input = document.createElement(\"input\");\n  const li = document.createElement(\"li\");\n  const span = document.createElement(\"span\");\n\n  span.innerHTML = item.value;\n  input.type = \"checkbox\";\n  input.setAttribute(\"data-id\", idx);\n\n  if (item.done) {\n    input.checked = true;\n  }\n\n  label.append(input);\n  label.append(span);\n  li.append(label);\n  document.querySelector(\".todos\").append(li);\n}\n\nfunction populateList(arr) {\n  arr.forEach((todo, idx) => {\n    populateListItem(todo, idx);\n  });\n}\n\nfunction toggleCheck(event) {\n  const input = event.target.parentElement.childNodes[0];\n  todos[input.dataset.id].done = !todos[input.dataset.id].done;\n  const JSONArray = JSON.stringify(todos);\n  localStorage.setItem(\"todos\", JSONArray);\n}\n\n// add event listener to after DOM loaded\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const checkies = Array.from(document.querySelectorAll(\".todos\"));\n\n  for (let i = 0; i < checkies.length; i++) {\n    checkies[i].addEventListener(\"click\", toggleCheck);\n  }\n});\n\ndocument.querySelector(\".add-todo-form\").addEventListener(\"submit\", addTodo);\npopulateList(todos);\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\nconst partyHeader = document.getElementById(\"party\");\n\nconst htmlGenerator = (string, htmlElement, tag) => {\n  const p = document.createElement(tag);\n  p.append(string);\n  if (Array.from(htmlElement.children).length) {\n    htmlElement.replaceChildren(p);\n  } else {\n    htmlElement.append(p);\n  }\n};\n\nhtmlGenerator(\"Party Time.\", partyHeader, \"p\");\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;