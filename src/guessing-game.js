class GuessingGame {
  left;
  right;
  solution;
  constructor() { }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    this.solution = Math.round((this.right + this.left) / 2);
    return this.solution;
  }

  lower() {
    this.right = this.solution;
  }

  greater() {
    this.left = this.solution;
  }
}

module.exports = GuessingGame;
