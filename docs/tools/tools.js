function icode(n) {
  let out = [];
  let a = '0123456789'.repeat(4).split('');
  while (n--) {
    a.sort((x, y) => Math.random() - Math.random());
    let s = 0;
    for (let i = 0; i < 9; i++) {
      s += (10 - i) * a[i];
    }
    let r = s % 11;
    if (r > 1) r = 11 - r;
    out.push(a.slice(0, 9).join('') + r.toString());
  }
  return out;
}

