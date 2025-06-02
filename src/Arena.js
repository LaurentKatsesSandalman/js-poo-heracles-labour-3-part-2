class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(f1, f2){
    return (Math.sqrt(Math.pow(f1.x-f2.x,2)+Math.pow(f1.y-f2.y,2))).toFixed(2)
  }

  isTouchable(attacker,defender){
    return (this.getDistance(attacker,defender)<=attacker.getRange())
  }
}