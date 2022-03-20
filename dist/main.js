/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backgroundSection.js":
/*!**********************************!*\
  !*** ./src/backgroundSection.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backgroundSection\": function() { return /* binding */ backgroundSection; }\n/* harmony export */ });\n/* harmony import */ var _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/earth.mp4 */ \"./src/video/earth.mp4\");\n\nconst backgroundSection = (() => {\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body');\n    return {\n      body: body\n    };\n  })(); // Background Object List \n\n\n  const backgroundTextObject = {\n    backgroundTags: ['section', 'video'],\n    section: {\n      id: 'backgroundSection'\n    },\n    video: {\n      id: 'earth',\n      muted: true,\n      loop: true,\n      autoplay: true,\n      src: _video_earth_mp4__WEBPACK_IMPORTED_MODULE_0__\n    }\n  }; //Return an object list of the elements\n\n  const backgroundElementList = objectlist => {\n    let list = {};\n\n    for (let i = 0; i < objectlist.backgroundTags.length; i++) {\n      let backgroundItem = objectlist[objectlist.backgroundTags[i]];\n      let element = newElement({\n        tag: objectlist.backgroundTags[i],\n        id: backgroundItem.id,\n        muted: backgroundItem.muted,\n        loop: backgroundItem.loop,\n        autoplay: backgroundItem.autoplay,\n        src: backgroundItem.src\n      });\n      list[`${objectlist.backgroundTags[i]}`] = element;\n    }\n\n    ;\n    return list;\n  }; // Main Background Section\n\n\n  const backgroundSection = () => {\n    let backgroundItems = backgroundElementList(backgroundTextObject),\n        section = backgroundItems.section,\n        video = backgroundItems.video;\n    section.appendChild(video);\n    render.bodyAppendChild(section);\n  }; // Function List\n\n\n  const newElement = item => {\n    let element = document.createElement(item.tag);\n\n    if (item.id) {\n      element.id = item.id;\n    }\n\n    ;\n\n    if (item.muted) {\n      element.muted = item.muted;\n    }\n\n    ;\n\n    if (item.loop) {\n      element.loop = item.loop;\n    }\n\n    ;\n\n    if (item.autoplay) {\n      element.autoplay = item.autoplay;\n    }\n\n    ;\n\n    if (item.src) {\n      element.src = item.src;\n    }\n\n    ;\n    return element;\n  }; // Render to DOM\n\n\n  const render = (() => {\n    const bodyAppendChild = element => {\n      cacheDom.body[0].appendChild(element);\n    };\n\n    return {\n      bodyAppendChild: bodyAppendChild\n    };\n  })();\n\n  return {\n    backgroundSection: backgroundSection\n  };\n})();\n\n//# sourceURL=webpack://portfolio/./src/backgroundSection.js?");

/***/ }),

/***/ "./src/contactSection.js":
/*!*******************************!*\
  !*** ./src/contactSection.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactSection\": function() { return /* binding */ contactSection; }\n/* harmony export */ });\nconst contactSection = (() => {\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body');\n    return {\n      body: body\n    };\n  })(); // Contact Object List \n\n\n  const contactTextObject = {\n    conntactTags: ['section', 'h1', 'h2', 'h3', 'a', 'footer'],\n    section: {\n      id: 'contact',\n      classId: 'contact-section'\n    },\n    h1: {\n      htmlString: 'Contact Me'\n    },\n    h2: {\n      id: 'e-mail',\n      htmlString: 'E-mail: andrewhumphrieswork@outlook.com'\n    },\n    h3: {\n      id: 'github'\n    },\n    a: {\n      href: 'https://github.com/jehutymsms',\n      target: '_blank',\n      htmlString: 'GitHub Link'\n    },\n    footer: {\n      id: 'footer',\n      htmlString: 'Created by Andrew Humphries'\n    }\n  }; //Return an object list of the elements\n\n  const contactElementList = objectlist => {\n    let list = {};\n\n    for (let i = 0; i < objectlist.conntactTags.length; i++) {\n      let contactItem = objectlist[objectlist.conntactTags[i]];\n      let element = newElement({\n        tag: objectlist.conntactTags[i],\n        id: contactItem.id,\n        classId: contactItem.classId,\n        htmlString: contactItem.htmlString,\n        href: contactItem.href,\n        target: contactItem.target\n      });\n      list[`${objectlist.conntactTags[i]}`] = element;\n    }\n\n    ;\n    return list;\n  }; // Main Background Section\n\n\n  const contactSection = () => {\n    let contactItems = contactElementList(contactTextObject),\n        section = contactItems.section,\n        h1 = contactItems.h1,\n        h2 = contactItems.h2,\n        h3 = contactItems.h3,\n        a = contactItems.a,\n        footer = contactItems.footer,\n        elementList = [h1, h2, h3, footer];\n    h3.appendChild(a);\n\n    for (let i = 0; i < elementList.length; i++) {\n      section.appendChild(elementList[i]);\n    }\n\n    render.bodyAppendChild(section);\n  }; // Function List\n\n\n  const newElement = item => {\n    let element = document.createElement(item.tag);\n\n    if (item.id) {\n      element.id = item.id;\n    }\n\n    ;\n\n    if (item.classId) {\n      element.classList = item.classId;\n    }\n\n    ;\n\n    if (item.href) {\n      element.href = item.href;\n    }\n\n    ;\n\n    if (item.target) {\n      element.target = item.target;\n    }\n\n    ;\n\n    if (item.htmlString) {\n      element.innerHTML = item.htmlString;\n    }\n\n    ;\n    return element;\n  }; // Render to DOM\n\n\n  const render = (() => {\n    const bodyAppendChild = element => {\n      cacheDom.body[0].appendChild(element);\n    };\n\n    return {\n      bodyAppendChild: bodyAppendChild\n    };\n  })();\n\n  return {\n    contactSection: contactSection\n  };\n})();\n\n//# sourceURL=webpack://portfolio/./src/contactSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _welcomeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomeSection */ \"./src/welcomeSection.js\");\n/* harmony import */ var _backgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundSection */ \"./src/backgroundSection.js\");\n/* harmony import */ var _contactSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactSection */ \"./src/contactSection.js\");\n/* harmony import */ var _projectsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsSection */ \"./src/projectsSection.js\");\n\n\n\n\n\n\n\nconst main = (() => {\n  _backgroundSection__WEBPACK_IMPORTED_MODULE_3__.backgroundSection.backgroundSection();\n  _navBar__WEBPACK_IMPORTED_MODULE_1__.navBar.navBarSection();\n  _welcomeSection__WEBPACK_IMPORTED_MODULE_2__.welcomeSection.welcomeSection();\n\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body'),\n        navBar = document.getElementById('navbar'),\n        aboutPage = document.getElementById('aboutPage'),\n        projectPage = document.getElementById('projectPage'),\n        contactPage = document.getElementById('contactPage');\n    return {\n      body: body,\n      navBar: navBar,\n      aboutPage: aboutPage,\n      projectPage: projectPage,\n      contactPage: contactPage\n    };\n  })();\n\n  const bindEvents = () => {\n    cacheDom.aboutPage.addEventListener('click', function () {\n      removeCurAddNew(_welcomeSection__WEBPACK_IMPORTED_MODULE_2__.welcomeSection.welcomeSection);\n    });\n    cacheDom.projectPage.addEventListener('click', function () {\n      removeCurAddNew(_projectsSection__WEBPACK_IMPORTED_MODULE_5__.projectSection.projectSection);\n    });\n    cacheDom.contactPage.addEventListener('click', function () {\n      removeCurAddNew(_contactSection__WEBPACK_IMPORTED_MODULE_4__.contactSection.contactSection);\n    });\n  };\n\n  const render = (() => {\n    const removePrev = () => {\n      cacheDom.body[0].lastElementChild.remove();\n    };\n\n    return {\n      removePrev: removePrev\n    };\n  })(); // Function list\n\n\n  const removeCurAddNew = New => {\n    render.removePrev();\n    New();\n  };\n\n  bindEvents();\n})();\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": function() { return /* binding */ navBar; }\n/* harmony export */ });\nconst navBar = (() => {\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body');\n    return {\n      body: body\n    };\n  })(); // Nav bar Object\n\n\n  const navText = {\n    navTitles: ['aboutPage', 'projectPage', 'contactPage'],\n    aboutPage: {\n      id: 'aboutPage',\n      text: 'About'\n    },\n    projectPage: {\n      id: 'projectPage',\n      text: 'Projects'\n    },\n    contactPage: {\n      id: 'contactPage',\n      text: 'Contact'\n    }\n  };\n\n  const navBarList = objectlist => {\n    let list = {};\n\n    for (let i = 0; i < objectlist.navTitles.length; i++) {\n      let navItem = objectlist[objectlist.navTitles[i]],\n          element = newElement({\n        tag: 'div',\n        id: navItem.id,\n        htmlString: navItem.text\n      });\n      list[`item${i}`] = element;\n    }\n\n    ;\n    return list;\n  }; // Main Nav Bar\n\n\n  const navBarSection = () => {\n    let element = newElement({\n      tag: 'nav',\n      id: 'navbar',\n      classId: 'navbar'\n    }),\n        navItems = navBarList(navText);\n\n    for (let x = 0; x < Object.keys(navItems).length; x++) {\n      element.appendChild(navItems[`item${x}`]);\n    }\n\n    ;\n    render.bodyAppendChild(element);\n  }; // Function List\n\n\n  const newElement = item => {\n    let element = document.createElement(item.tag);\n\n    if (item.classId) {\n      element.classList = item.classId;\n    }\n\n    ;\n\n    if (item.id) {\n      element.id = item.id;\n    }\n\n    ;\n\n    if (item.htmlString) {\n      element.innerHTML = item.htmlString;\n    }\n\n    ;\n    return element;\n  }; // Render to DOM\n\n\n  const render = (() => {\n    const bodyAppendChild = element => {\n      cacheDom.body[0].appendChild(element);\n    };\n\n    return {\n      bodyAppendChild: bodyAppendChild\n    };\n  })();\n\n  return {\n    navBarSection: navBarSection\n  };\n})();\n\n//# sourceURL=webpack://portfolio/./src/navBar.js?");

/***/ }),

/***/ "./src/projectsSection.js":
/*!********************************!*\
  !*** ./src/projectsSection.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectSection\": function() { return /* binding */ projectSection; }\n/* harmony export */ });\n/* harmony import */ var _images_Statspreviewcardcomponent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Statspreviewcardcomponent.png */ \"./src/images/Statspreviewcardcomponent.png\");\n/* harmony import */ var _images_odin_restaurant_page_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/odin-restaurant-page.png */ \"./src/images/odin-restaurant-page.png\");\n/* harmony import */ var _images_RockPaperScissors_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/RockPaperScissors.png */ \"./src/images/RockPaperScissors.png\");\n/* harmony import */ var _images_odin_library_page_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/odin-library-page.png */ \"./src/images/odin-library-page.png\");\n\n\n\n\nconst projectSection = (() => {\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body');\n    return {\n      body: body\n    };\n  })(); // Project Object info\n\n\n  const projectTextObject = {\n    projects: ['project1', 'project2', 'project3', 'project4'],\n    projectClass: ['projectImage', 'project-description'],\n    projectTags: ['div', 'img', 'h2', 'a'],\n    a: {\n      target: '_blank',\n      codeLinkText: 'Code Link >',\n      livePreviewText: 'Live Preview'\n    },\n    project1: {\n      id: 'project1',\n      project1Image: {\n        id: 'project1Image',\n        img: {\n          src: _images_Statspreviewcardcomponent_png__WEBPACK_IMPORTED_MODULE_0__,\n          alt: 'Card Project'\n        },\n        div: {\n          id: 'project1Description',\n          h2: {\n            text: 'Responsive WebPage',\n            codeLink: {\n              href: 'https://github.com/jehutymsms/Stat-Card-Page-Project'\n            },\n            livePreview: {\n              href: 'https://jehutymsms.github.io/Stat-Card-Page-Project/'\n            }\n          }\n        }\n      }\n    },\n    project2: {\n      id: 'project2',\n      project2Image: {\n        id: 'project2Image',\n        img: {\n          src: _images_RockPaperScissors_png__WEBPACK_IMPORTED_MODULE_2__,\n          alt: 'rock paper scissors game image'\n        },\n        div: {\n          id: 'project2Description',\n          h2: {\n            text: 'Rock Paper Scissors Game',\n            codeLink: {\n              href: 'https://github.com/jehutymsms/ROCKPAPERSCISSORS'\n            },\n            livePreview: {\n              href: 'https://jehutymsms.github.io/ROCKPAPERSCISSORS/'\n            }\n          }\n        }\n      }\n    },\n    project3: {\n      id: 'project3',\n      project3Image: {\n        id: 'project3Image',\n        img: {\n          src: _images_odin_library_page_png__WEBPACK_IMPORTED_MODULE_3__,\n          alt: 'library app image preview'\n        },\n        div: {\n          id: 'project3Description',\n          h2: {\n            text: 'Library Application',\n            codeLink: {\n              href: 'https://github.com/jehutymsms/Library-Odin-project'\n            },\n            livePreview: {\n              href: 'https://jehutymsms.github.io/Library-Odin-project/'\n            }\n          }\n        }\n      }\n    },\n    project4: {\n      id: 'project4',\n      project4Image: {\n        id: 'project4Image',\n        img: {\n          src: _images_odin_restaurant_page_png__WEBPACK_IMPORTED_MODULE_1__,\n          alt: 'restaurant home page preview'\n        },\n        div: {\n          id: 'project4Description',\n          h2: {\n            text: 'Restaurant Page',\n            codeLink: {\n              href: 'https://github.com/jehutymsms/odin-restaurant-page'\n            },\n            livePreview: {\n              href: 'https://jehutymsms.github.io/odin-restaurant-page/'\n            }\n          }\n        }\n      }\n    }\n  }; // List of Description elements\n\n  const descriptElementList = number => {\n    let list = {};\n    list.item0 = newElement({\n      tag: Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div'])[1],\n      htmlString: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'].text\n    });\n\n    for (let i = 1; i < Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2']).length; i++) {\n      list[`item${i}`] = newElement({\n        tag: projectTextObject.projectTags[3],\n        href: projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'][`${Object.keys(projectTextObject[`project${number}`][`project${number}Image`]['div']['h2'])[i]}`].href,\n        target: projectTextObject.a.target,\n        htmlString: projectTextObject['a'][`${Object.keys(projectTextObject.a)[i]}`]\n      });\n    }\n\n    return list;\n  };\n\n  const projectImageElements = number => {\n    let list = {},\n        descriptElements = descriptElementList(number);\n    list.item1 = newElement({\n      tag: projectTextObject.projectTags[1],\n      src: projectTextObject[`project${number}`][`project${number}Image`]['img'].src,\n      alt: projectTextObject[`project${number}`][`project${number}Image`]['img'].alt\n    });\n    list.item2 = newElement({\n      tag: projectTextObject.projectTags[0],\n      id: projectTextObject[`project${number}`][`project${number}Image`]['div'].id,\n      classId: projectTextObject.projectClass[1]\n    });\n\n    for (let x = 0; x < Object.keys(descriptElements).length; x++) {\n      list.item2.appendChild(descriptElements[`item${x}`]);\n    }\n\n    ;\n    return list;\n  };\n\n  const projectElements = number => {\n    let elements = projectImageElements(number),\n        projectElement = newElement({\n      tag: projectTextObject.projectTags[0],\n      id: projectTextObject[`project${number}`][`project${number}Image`].id,\n      classId: projectTextObject.projectClass[0]\n    });\n\n    for (let x = 0; x < Object.keys(elements).length; x++) {\n      projectElement.appendChild(elements[`item${x + 1}`]);\n    }\n\n    ;\n    return projectElement;\n  };\n\n  const projectList = () => {\n    let list = {},\n        elements = [];\n\n    for (let x = 0; x < projectTextObject.projects.length; x++) {\n      elements.push(projectElements(x + 1));\n    }\n\n    for (let x = 0; x < projectTextObject.projects.length; x++) {\n      list[`item${x}`] = newElement({\n        tag: projectTextObject.projectTags[0],\n        id: projectTextObject[`project${x + 1}`].id\n      });\n    }\n\n    ;\n\n    for (let x = 0; x < Object.keys(list).length; x++) {\n      list[`item${x}`].appendChild(elements[x]);\n    }\n\n    ;\n    return list;\n  };\n\n  const projectSection = () => {\n    let list = projectList(),\n        projectContainer = newElement({\n      tag: 'div',\n      id: 'projectContainer'\n    }),\n        projects = newElement({\n      tag: 'section',\n      id: 'projects',\n      classId: 'projects-section'\n    });\n\n    for (let x = 0; x < Object.keys(list).length; x++) {\n      projectContainer.appendChild(list[`item${x}`]);\n    }\n\n    ;\n    projects.appendChild(projectContainer);\n    render.bodyAppendChild(projects);\n  }; // Element Creation\n\n\n  const newElement = item => {\n    let element = document.createElement(item.tag);\n\n    if (item.classId) {\n      element.classList = item.classId;\n    }\n\n    ;\n\n    if (item.id) {\n      element.id = item.id;\n    }\n\n    ;\n\n    if (item.htmlString) {\n      element.innerHTML = item.htmlString;\n    }\n\n    ;\n\n    if (item.href) {\n      element.href = item.href;\n    }\n\n    ;\n\n    if (item.target) {\n      element.target = item.target;\n    }\n\n    ;\n\n    if (item.src) {\n      element.src = item.src;\n    }\n\n    ;\n\n    if (item.alt) {\n      element.alt = item.alt;\n    }\n\n    ;\n    return element;\n  }; // Render to DOM\n\n\n  const render = (() => {\n    const bodyAppendChild = element => {\n      cacheDom.body[0].appendChild(element);\n    };\n\n    return {\n      bodyAppendChild: bodyAppendChild\n    };\n  })();\n\n  return {\n    projectSection: projectSection\n  };\n})();\n\n//# sourceURL=webpack://portfolio/./src/projectsSection.js?");

/***/ }),

/***/ "./src/welcomeSection.js":
/*!*******************************!*\
  !*** ./src/welcomeSection.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"welcomeSection\": function() { return /* binding */ welcomeSection; }\n/* harmony export */ });\nconst welcomeSection = (() => {\n  const cacheDom = (() => {\n    let body = document.getElementsByTagName('body');\n    return {\n      body: body\n    };\n  })(); // Welcome Object info\n\n\n  const welcomeTextObject = {\n    welcomeTags: ['section', 'div', 'h1', 'p'],\n    section: {\n      id: 'welcome',\n      class: 'welcome-section'\n    },\n    div: {\n      class: 'about'\n    },\n    h1: {\n      htmlString: 'Andrew Humphries'\n    },\n    p: {\n      htmlString: 'Web Developer'\n    }\n  }; //Return an object list of the elements\n\n  const welcomeElementList = objectlist => {\n    let list = {};\n\n    for (let i = 0; i < objectlist.welcomeTags.length; i++) {\n      let welcomeItem = objectlist[objectlist.welcomeTags[i]];\n      let element = newElement({\n        tag: objectlist.welcomeTags[i],\n        id: welcomeItem.id,\n        class: welcomeItem.class,\n        htmlString: welcomeItem.htmlString\n      });\n      list[`${objectlist.welcomeTags[i]}`] = element;\n    }\n\n    ;\n    return list;\n  }; // Main Welcome Section\n\n\n  const welcomeSection = () => {\n    let welcomeItems = welcomeElementList(welcomeTextObject),\n        section = welcomeItems.section,\n        div = welcomeItems.div,\n        h1 = welcomeItems.h1,\n        p = welcomeItems.p;\n    div.appendChild(h1);\n    div.appendChild(p);\n    section.appendChild(div);\n    render.bodyAppendChild(section);\n  }; // Function List\n\n\n  const newElement = item => {\n    let element = document.createElement(item.tag);\n\n    if (item.id) {\n      element.id = item.id;\n    }\n\n    ;\n\n    if (item.class) {\n      element.classList = item.class;\n    }\n\n    ;\n\n    if (item.htmlString) {\n      element.innerHTML = item.htmlString;\n    }\n\n    ;\n    return element;\n  }; // Render to DOM\n\n\n  const render = (() => {\n    const bodyAppendChild = element => {\n      cacheDom.body[0].appendChild(element);\n    };\n\n    return {\n      bodyAppendChild: bodyAppendChild\n    };\n  })();\n\n  return {\n    welcomeSection: welcomeSection\n  };\n})();\n\n//# sourceURL=webpack://portfolio/./src/welcomeSection.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/style.scss?");

/***/ }),

/***/ "./src/images/RockPaperScissors.png":
/*!******************************************!*\
  !*** ./src/images/RockPaperScissors.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a0fac27878b948919d48.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/RockPaperScissors.png?");

/***/ }),

/***/ "./src/images/Statspreviewcardcomponent.png":
/*!**************************************************!*\
  !*** ./src/images/Statspreviewcardcomponent.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1270b44260b65aee209d.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/Statspreviewcardcomponent.png?");

/***/ }),

/***/ "./src/images/odin-library-page.png":
/*!******************************************!*\
  !*** ./src/images/odin-library-page.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"618d8c116d544db21d10.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/odin-library-page.png?");

/***/ }),

/***/ "./src/images/odin-restaurant-page.png":
/*!*********************************************!*\
  !*** ./src/images/odin-restaurant-page.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ea9f7fe68823005288df.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/odin-restaurant-page.png?");

/***/ }),

/***/ "./src/video/earth.mp4":
/*!*****************************!*\
  !*** ./src/video/earth.mp4 ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"41584ed51700d249bf73.mp4\";\n\n//# sourceURL=webpack://portfolio/./src/video/earth.mp4?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
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