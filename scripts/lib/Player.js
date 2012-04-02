var Player = function(game) {
  this.game = game;
  this.x = 100;
  this.y = 100;
}

Player.prototype.update = function() {
  this.x += 1;
  this.y += 1;
}

Player.prototype.draw = function() {
  this.game.drawRectangle('#f00', this.x, this.y, 10, 10);
}
