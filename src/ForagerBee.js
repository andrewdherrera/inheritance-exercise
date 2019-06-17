var ForagerBee = function() {
    Bee.call(this)
    this.age = 10;
    this.job = 'find pollen';
    Bee.color = 'yellow';
    Grub.food = '';
    this.canFly = true;
    this.treasureChest = [];
};
ForagerBee.prototype = Object.create(Grub.prototype)
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(value){
    this.treasureChest.push(value);
}
