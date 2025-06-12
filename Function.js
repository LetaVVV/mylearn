function loop(n = 0) {
  if (n > 1) return n + loop(n - 1);
  return n;
}

function int(i) {
  return parseInt(i);
}

function float(i) {
  return parseFloat(i);
}

const n = int(prompt('Ввведите число') ?? '0');
console.log(`Результат суммы чисел от 1 до ${n}:`, loop(n));


