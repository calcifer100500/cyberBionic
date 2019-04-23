function Box(h,w,dep,mat) {
    this.Height = h;
    this.Width = w;
    this.Depth = dep;
    this.Material = mat;
    this.volume = function() {
        return this.Height * this.Width * this.Depth;
    }
}
var box = new Box(20,40,30);

console.log(box);
console.log(box.volume());