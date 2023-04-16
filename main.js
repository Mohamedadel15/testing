// all div elements to get the attributes "drag-sorting"
const containerDiv = document.querySelectorAll(".drag");

//   language name h2 to draggable inside the draggable div
const allDivTArget = document.querySelectorAll(".all");

// button add
const buttonAdd = document.getElementById("button-add");

// inout text field
const inputText = document.getElementById("add-language");

//  lists of all my courses
let allCourses = [
  "react",
  "css",
  "html",
  "js",
  "javascript",
  "bootstrap",
  "sass",
];
//  service name
const serviceName = document.querySelector(".text h1");

//  image url for fixed cards
const imageUrl = document.getElementById("fixed-image");

//  button test
const testButton = document.getElementById("test-button");

//  close button for fixed die => { cards popup close}
const closeButton = document.getElementById("close-button");


//  BUTTON ADD  new language in repo div 
buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputText.value) return false;
  const newDiv = document.createElement("div");
  const createText = document.createTextNode(inputText.value);
  newDiv.classList.add("all");
  newDiv.draggable = "true";
  newDiv.appendChild(createText);
  //  append the new div to the parent div  to-do
  document.getElementById("to-do").appendChild(newDiv);
  newDiv.addEventListener("dragstart", add);
  newDiv.addEventListener("dragend", remove);
  //    to empty the text field from the last text
  inputText.value = "";

  getAllNAme();
});

//  to add class
function add({ target }) {
  target.classList.add("add-color");
}

// to remove class
function remove({ target }) {
  target.classList.remove("add-color");
}

// //  to get all div with my custom attribute
containerDiv.forEach((ele) => {
  ele.addEventListener("dragover", (e) => {
    e.preventDefault();
    //  target element that i draggable it
    const targetDiv = document.querySelector(".add-color");
    ele.appendChild(targetDiv);
  });
});

// to check add new name programming language

function getAllNAme() {
  let newListCourses = [];
  const allLanguageNames = [];
  document.querySelectorAll(".all").forEach((ele) => {
    allLanguageNames.push(ele.innerHTML);
  });
  for (let i of allLanguageNames) {
    for (let j of allCourses) {
      if (i == j) {
        newListCourses.push(j);
      }
    }
  }
  if (newListCourses[0] === undefined) {
    notFound();
  } else {
    check(newListCourses[0]);
  }
}

//  repo for all my learning programming language
const imgSourceWithMyCourses = {
  html: "images/coding-vs-programming-2.webp",
  css: "images/andrew-kliatskyi-Ad199MLrw4s-unsplash.jpg",
  js: "images/images (1).jpeg",
  javascript: "images/images (1).jpeg",
  bootstrap: "images/my-photo.jpg",
  sass: "images/download.png",
  react: "images/andrew-kliatskyi-Ad199MLrw4s-unsplash.jpg",
};

//  function if the this course is foundedIn the imgSourceWithMyCourses
function check(corses) {
  imageUrl.src = imgSourceWithMyCourses[corses];
  document.querySelector(
    ".text p"
  ).innerHTML = `loremLorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero similique illo fuga quasi doloremque modi unde necessitatibus obcaecati quam, nisi consectetur reprehenderit ipsum laboriosam dicta voluptate voluptatibus facere. Laboriosam`;
  return (serviceName.innerHTML = `${corses}`);
}

// function if the this course is not foundedIn the imgSourceWithMyCourses
function notFound() {
  imageUrl.src = "images/cross.png";
  document.querySelector(".text p").innerHTML = `not found !
     please try again`;
  serviceName.innerHTML = `oops!`;
}

//  event to done processing testing
testButton.addEventListener("click", () => {
  if (document.querySelector(".language-test .all") !== null) {
    document.querySelector(".cards3").classList.add("show");
    // enoent to close  the popup card
    closeButton.addEventListener("click", () => {
      document.querySelector(".cards3").classList.remove("show");
    });
  } else return;
});
