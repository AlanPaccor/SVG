class Circle {
    constructor(cx, cy, r, color) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.color = color;
    }
  
    getSVG() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor(x1, y1, x2, y2, x3, y3, color) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.color = color;
    }
  
    getSVG() {
      return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
    }
  
    getSVG() {
      return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  