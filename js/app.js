class Hound {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.isAdult = false;
        this.hunger = 0;
        this.boredom = 0;
        this.sleep = 0;
        this.isAlive = true;
    }
    getHungry() {
        setInterval(() => {
            if (this.hunger < 10 && this.isAlive === true && this.age < 10) {
                this.hunger++;
            } else if (this.hunger === 10 && this.isAlive === true && this.age < 10) {
                alert(this.name + " has died from starvation!");
                this.isAlive = false;
                $( ".movePup" ).attr("id","visability");
            }
        }, 2000);
    }
    
    getSleepy() {
            setInterval(() => {
            if (this.sleep < 10 && this.isAlive === true && this.age < 10) {
                this.sleep++;
            } else if (this.sleep === 10 && this.isAlive === true && this.age < 10) {
                alert(this.name + " has died from lack of sleep!");
                this.isAlive = false;
                $( ".movePup" ).attr("id","visability");
            }
        }, 2000);
    }
    
    getBored () {
                setInterval(() => {
            if (this.boredom < 10 && this.isAlive === true && this.age < 10) {
                this.boredom++;
                console.log("this is working")
            } else if (this.boredom === 10 && this.isAlive === true && this.age < 10) {
                alert(this.name + " has died from lack of attention!");
                this.isAlive = false;
                $( ".movePup" ).attr("id","visability");

            }
        }, 2000);
    }

    evolve() {
    	$(".movePup").attr("id","visability");

      let img = $('<img class="moveHound flipHound" src="images/houndwalkingfirst.gif">');
      img.appendTo('#myCanvas');
    }
    
    ageUp () {
            setInterval(() => {
            if (this.isAlive === true && this.age < 10) {
                this.age++; 
           	} else if (this.isAlive === true && this.age >= 10 && this.isAdult === false) {
           		alert(this.name +" is now an adult! You no longer have to care for them\n" 
                    + this.name + " shall now be moved out of the nursery.");
           		this.isAdult = true;
           		this.evolve()

           	}
                }, 3000);
           	
           	}
            
    }

let name = prompt("Please enter a name for your spawn", "unnamed");
const primaryHound = new Hound(name);
$("#enterName").text(name)


const updateStats = () => {
	setInterval(() => {
		const $boredomText = $("#attention").text("attention: " + primaryHound.boredom);
		const $sleepText = $("#sleep").text("sleep: " + primaryHound.sleep);
		const $ageText = $("#age").text("age: " + primaryHound.age);
		const $hungerText = $("#hunger").text("hunger: " + primaryHound.hunger);
    }, 500);
            
}

$('#feedButton').on('click',function() {
if (primaryHound.isAlive === true && primaryHound.hunger > 0) {
  primaryHound.hunger--;}
  updateStats();
});
$('#playButton').on('click',function() {
if (primaryHound.isAlive === true && primaryHound.boredom > 0) {
  primaryHound.boredom--;}
  updateStats();
});
$('#sleepButton').on('click',function() {
if (primaryHound.isAlive === true && primaryHound.sleep > 0) {
  primaryHound.sleep--;}
  updateStats();
});
$('#spawnButton').on('click',function() {
if (primaryHound.age === 10 || primaryHound.isAlive === false) {
  $(".movePup").attr("id","pup");
  let name = prompt("Please enter a name for your spawn", "unnamed");
  $("#enterName").text(name);
  primaryHound.age = 0;
  primaryHound.hunger = 0;
  primaryHound.sleep = 0;
  primaryHound.boredom = 0;
  primaryHound.isAdult = false;
  primaryHound.isAlive = true;
}

  updateStats();
});

const gameStart = () => {
	console.log("Starting Game");
	updateStats();
	primaryHound.ageUp();
	primaryHound.getBored();
	primaryHound.getSleepy();
	primaryHound.getHungry();
}

gameStart();










