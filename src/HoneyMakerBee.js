var HoneyMakerBee = function() {
    Bee.call(this)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    Grub.food = '';
    Bee.color = 'yellow';

};

HoneyMakerBee.prototype.eat = function(){
 Grub.eat();
}
HoneyMakerBee.prototype.makeHoney = function(){
    this.honeyPot + this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function(){
    this.honeyPot - this.honeyPot--;
}