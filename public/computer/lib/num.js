// 🧮 Numbers
import { vec4, mat4 } from "../dep/gl-matrix/index.js";

export { vec4, mat4 };

// Accepts integer from 0–16
// Yields 17 different values between 0–255.
export function byteInterval17(i16) {
  return Math.min(i16 * 16, 255);
}

// Generates an integer from 0-n (inclusive)
export function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}

// Generates an integer from low-high (inclusive)
export function randIntRange(low, high) {
  return low + randInt(high - low);
}

// Gets the distance between two points.
export function dist(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

export function radians(deg) {
  return deg * (Math.PI / 180);
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a, b, amount) {
  return a + (b - a) * clamp(amount, 0, 1);
}

export class Track {
  #from;
  #to;
  #result;

  constructor(from, to, result) {
    this.#from = from;
    this.#to = to;
    this.#result = result;
  }

  step(progress) {
    this.#result(lerp(this.#from, this.#to, progress));
  }
}
