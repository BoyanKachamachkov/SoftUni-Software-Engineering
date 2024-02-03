class PointDistance {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;

    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

const a = new PointDistance(1, 2);
const b = new PointDistance(4, 6);

console.log(a, b);
console.log(PointDistance.distance(a, b));
