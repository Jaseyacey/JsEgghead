// nested function in a function that has access to the parent function's variables
// simple example is [1].map((a) => a * 2) where the map function has access to the array
const workshop = "Javascript";

function parent() {
  const par = "jason";
  return function child() {
    const hobby = "triathlons";
    console.log(
      `I am doing a course on ${workshop} and my name is  ${par} my hobby is ${hobby}`
    );
  };
}

const child = parent();

child(); // I am doing a course on Javascript and my name is  jason my hobby is triathlons
