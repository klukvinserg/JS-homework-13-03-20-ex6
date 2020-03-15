let num1;
let num2;
let arr = [];

for (; true; ) {
  num1 = +prompt("Get number min");

  if (!isNaN(num1) && num1 >= 1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

for (; true; ) {
  num2 = +prompt("Get number max");

  if (!isNaN(num2) && num2 >= 1 && num2 > num1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

for (let i = num1; i <= num2; i++) {
  if (resultNumber(i) === true) {
    arr.push(i);
  }
}

function resultNumber(a) {
  let tmp = 0;
  for (let i = a - 1; i >= 1; i--) {
    if (!(a % i)) {
      tmp = tmp + i;
    } else continue;
  }

  if (tmp === a) {
    return true;
  } else {
    return false;
  }
}

document.write(`Result: ${arr}`);
