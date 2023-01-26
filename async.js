async function my_fun() {
  setTimeout(() => {
    console.log("hello");
  }, 1000);
  console.log("inside async");
}

my_fun();
console.log("Printed");
