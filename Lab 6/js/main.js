// bai1
let x = prompt("Nhap so:")

function kiemTraSo(num) {
    // doi kieu du lieu
    x = parseFloat(num);
    // ngoai le - khong phai so
    if(!Number.isFinite(num)) return x + "khong phai so";
    // kiem tra
    if(num < 0) {
        return num + "so am";
    } else if (num == 0) {
        return num + "la 0";
    } else {
        if (num % 1 == 0) return num + "so nguyen duong";
        //if (Number.isInteger(x)) return x + "so nguyen duong";
        else return num + "la so thap nhan duong"
    }
}

console.log(kiemTraSo(x))
//Dom
//document.write(kiemTraSo(x))
// bai2
let y = 1;
let z = 2;
let k = 3;

// arrow func
const max = (...a) => {
    let maxNum = 0;
    // ..
    a.forEach((element) => {
      if (maxNum < element) {
        maxNum = element;
      }
    });
  
    return maxNum;
  };

  function max2(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if ( c > b && c > a) {
        return c;
    }
  }

  document.write(max(y, z, k));
  document.write(max2(y, z, k));