vtd.airGroundTower = (function () {

    var properties = {
        level : 1,
        range: 1,
        damage: 1,
        attackSpeed: 2,
        cost: (100 * level)
    };


    //we will have to check if the enemy is flying before this function is called to determine wether this tower can attack the enemy or not
    function attack (enemy) {
        attackedEnemy = enemy.properties;
        tower = properties;
        trueDamage = tower.damage - attackedEnemy.armor;
        if (trueDamage <= 0) {
            trueDamage = 0;
        }
        attackedEnemy.health = attackedEnemy.health - trueDamage;
        if (attackedEnemy.health <= 0) {
            killEnemy(enemy);
        }
    };

    function upgrade(tower)
    {
        upgradingTower = tower.properties;
        upgradingTower.level++;
        upgradingTower.damage = upgradingTower.dmamge * 2;
        //player money = player money - upgradingTower.cost;
    }

    



})();