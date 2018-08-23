var Vec2 = function(x, y){
    this.x = x;
    this.y = y;
};
Vec2.prototype.add = function(vec){
    this.x += vec.x;
    this.y += vec.y;
    return this;
};
Vec2.prototype.multScalar = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
    return this;
};

var world = {
    gravity: new Vec2(0, 1),
    airResistance: .9,
    wind: new Vec2(10, 1),
    control: new Vec2(-3, -5)
};

var object = {
    position: new Vec2(10, 20),
    speed: new Vec2(1, 3),
    update: function(){
        this.speed
            .add(world.gravity)
            .add(world.wind)
            .add(world.control)
            .multScalar(world.airResistance);
        
        return this.position.add(this.speed);
    }
};

console.log(object.update());       // Vec2 {x: 17.2, y: 20}
console.log(object.update());       // Vec2 {x: 29.979999999999997, y: 17.3}
console.log(object.update());       // Vec2 {x: 47.782, y: 12.170000000000002}
console.log(object.update());       // Vec2 {x: 70.1038, y: 4.853000000000002}
console.log(object.update());       // Vec2 {x: 96.49342000000001, y: -4.432299999999999}


