let coffeeMachine = {
    "water": 400,
    "milk": 540,
    "beans": 120,
    "cups": 9,
    "money": 550,
    print: function () {
        console.log("The coffee machine has:");
        console.log(this.water + " ml of water");
        console.log(this.milk + " ml of milk");
        console.log(this.beans + " g of coffee beans");
        console.log(this.cups + " disposable cups");
        console.log("$" + this.money + " of money");
    },

    takeMoney: function () {
        console.log("I gave you $" + this.money);
        this.money = 0;
    },
    changeAll: function (water, milk, beans, cups, money = 0) {
        this.water += water;
        this.milk += milk;
        this.beans += beans;
        this.cups += cups;
        this.money += money;
    },
    checkAll: function (water, milk, beans, cups, money = 0) {
        if  (this.water + water < 0){
            console.log("Sorry, not enough water!");
            return false;
        }
        if  (this.milk + milk  < 0){
            console.log("Sorry, not enough milk!");
            return false;
        }
        if  (this.beans + beans < 0){
            console.log("Sorry, not enough coffee beans!");
            return false;
        }
        if  (this.cups + cups < 0){
            console.log("Sorry, not enough cups!");
            return false;
        }
        console.log("I have enough resources, making you a coffee!");
        return true;
    },
    makeEspresso: function () {
        if (this.checkAll(-250, 0, -16, -1, 4)) {
            this.changeAll(-250, 0, -16, -1, 4);
        }
    },
    makeLatte: function () {
        if (this.checkAll(-350, -75, -20, -1, 7)) {
            this.changeAll(-350, -75, -20, -1, 7);
        }
    },
    makeCappuccino: function () {
        if (this.checkAll(-200, -100, -12, -1, 6)) {
            this.changeAll(-200, -100, -12, -1, 6);
        }
    }
}

let exit = true;
while (exit) {
    console.log("\nWrite action (buy, fill, take, remaining, exit):");
    let command = input();
    switch (command) {
        case "buy":
            console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
            let typeOfCoffee = Number(input());
            switch (typeOfCoffee) {
                case 1:
                    coffeeMachine.makeEspresso();
                    break;
                case 2:
                    coffeeMachine.makeLatte();
                    break;
                case 3:
                    coffeeMachine.makeCappuccino();
                    break;
            }
            break;
        case "fill":
            console.log("Write how many ml of water you want to add:");
            let water = Number(input());
            console.log("Write how many ml of milk you want to add:");
            let milk = Number(input());
            console.log("Write how many grams of coffee beans you want to add:");
            let beans = Number(input());
            console.log("Write how many disposable coffee cups you want to add:");
            let cups = Number(input());
            coffeeMachine.changeAll(water, milk, beans, cups);
            break
        case "take":
            coffeeMachine.takeMoney();
            break;
        case "remaining":
            coffeeMachine.print();
            break;
        case "exit" :
            exit = false;
    }
}


