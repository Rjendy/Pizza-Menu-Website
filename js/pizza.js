

function getReceipt() {
	var text1 = 0;
	var text2 = " ";
	var textSize = "Size: ";
	var textMeat = "Meat: ";
	var textVeggies = "Veggies: ";
	var textCheese = "Cheese: ";
	var textCrust = "Crust: ";
	var textSauce = "Sauce: ";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize;
			textSize = textSize+selectedSize+"-";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	
    text2 = (text2 + sizeTotal + "<br>"+ "<br>");
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce);
};


function getMeat(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value;
			textMeat = textMeat+meatArray[j].value+"-";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	text2 = (text2 + meatTotal + "<br>"+ "<br>");
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggie(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce);
};	


function getVeggie(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
			console.log("selected veggie item: ("+veggieArray[k].value+")");
			text1 = text1+veggieArray[k].value;
			textVeggies = textVeggies+veggieArray[k].value+"-";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	text2 = (text2 + veggieTotal + "<br>"+ "<br>");
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCheese(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce);
};			



function getCheese(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce) {	
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			var selectedCheese = cheeseArray[l].value;
			text1 = text1+selectedCheese;
			textCheese = textCheese+selectedCheese+"-";
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	text2 = (text2 + cheeseTotal + "<br>"+ "<br>");
	runningTotal = (runningTotal + cheeseTotal);
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");	
	getCrust(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce);
	
};		


 function getCrust(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce) {	
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var m = 0; m < crustArray.length; m++) {
		if (crustArray[m].checked) {
			var selectedCrust = crustArray[m].value;
			text1 = text1+selectedCrust;
			textCrust = textCrust+selectedCrust+"-";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	}
	if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	text2 = (text2 + crustTotal + "<br>"+ "<br>")	
	runningTotal = (runningTotal + crustTotal);
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");	
	getSauce(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce)
};

function getSauce(runningTotal,text1,text2,textSize,textMeat,textVeggies,textCheese,textCrust,textSauce) {	
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var n = 0; n < sauceArray.length; n++) {
		if (sauceArray[n].checked) {
			var selectedSauce = sauceArray[n].value;
			text1 = text1+selectedSauce;
			textSauce = textSauce+selectedSauce+"-";
		}
	}
	if (selectedSauce === "No Sauce") {
		crustTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		crustTotal = 0;
	} 
	if (selectedSauce === "Barbeque Sauce") {
		crustTotal = 0;
	} else if (selectedSauce === "Marinara") {
		sauceTotal = 0;
	}

	text2 = (text2 + sauceTotal);	
	runningTotal = (runningTotal + sauceTotal);
	console.log("sauce text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");	
	document.getElementById("showSize").innerHTML=textSize;
    document.getElementById("showMeat").innerHTML=textMeat;
    document.getElementById("showVeggies").innerHTML=textVeggies;
    document.getElementById("showCheese").innerHTML=textCheese;
    document.getElementById("showCrust").innerHTML=textCrust;
    document.getElementById("showSauce").innerHTML=textSauce;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice").innerHTML = "Total:  $"+runningTotal+".00";
};	