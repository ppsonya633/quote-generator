console.log("grind every sinle day until you get it done");
const p = [1, 2, 3, 4, 5];

const a = 2;
let count1 = 0;
for (let key in p) {
  console.log(key);
  if (p[key] === a) {
    count1++;
  }
}
console.log(count1);
