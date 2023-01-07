function multiply() {
  for (let i = 0; i < 6; i++) {
    console.log(i);
    if (i === 2) {
      return;
    }
  }
  console.log("something");
  return 100;
}
