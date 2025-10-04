let n1 = 0, n2 = 1, next, terms = 10;
for (let i = 1; i <= terms; i++) {
  console.log(n1);
  next = n1 + n2;
  n1 = n2;
  n2 = next;
}
