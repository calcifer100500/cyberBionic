/*task 01*/
function Box(h,w,dep,mat) {
    this.Height = h;
    this.Width = w;
    this.Depth = dep;
    this.Material = mat;

    this.volume = function() {
        return this.Height * this.Width * this.Depth;
    };
}
var box = new Box(20,40,30);

var div = document.createElement('div');
div.className = 'first';
document.body.appendChild(div);
var title = document.createElement('h2');
title.innerHTML = ('Task 01');
div.appendChild(title);
var p = document.createElement('P');
p.innerHTML = ('box = '+ box.Height.toString() + ', ' + box.Width.toString() + ', ' + box.Depth.toString());
div.appendChild(p);
var pSecond = document.createElement('P');
pSecond.innerHTML = ('box volume = ' + box.volume());
div.appendChild(pSecond);

/*task 02*/
