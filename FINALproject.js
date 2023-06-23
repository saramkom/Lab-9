function greeting() {
  let Water_Amount = document.getElementById("amount").value;
  if (Water_Amount === "0") {
    alert("You didn't enter an amount!");
  } else {
    alert("Good job drinking " + Water_Amount + " " + document.getElementById("unit").value + "!");
    
    const out1 = document.getElementById('output1');
    out1.textContent = Water_Amount + ' ' + document.getElementById("unit").value;
  }
}

const txt1 = document.getElementById('amount');
const unit = document.getElementById('unit');
const submt = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1() {
  out1.innerHTML = txt1.value + ' ' + unit.value;
}

submt.addEventListener('click', fun1);

function showPicture() {
  const amount = document.getElementById("amount").value;
  const unit = document.getElementById("unit").value;
  const imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = "";

  
  if (amount === "1" || amount === "250" || amount ==="8." ) {
    const image = document.createElement("img");
    image.src = "OneCup.png";
    image.alt = "One-Eighth Cup";
	image.id = "OneCup";
    imageContainer.appendChild(image);

  } else if  (amount === "2" || amount === "500" || amount ==="16" ) {
    const image = document.createElement("img");
    image.src = "TwoCups.png";
    image.alt = "Two-Eighths Cup";
	image.id = "TwoCups";
    imageContainer.appendChild(image); 
  
  } else if  (amount === "3" || amount === "750" || amount ==="24" ) {
    const image = document.createElement("img");
    image.src = "ThreeCups.png";
    image.alt = "Three-Eighths Cup";
	image.id = "ThreeCups";
    imageContainer.appendChild(image); 
  }
  else if  (amount === "4" || amount === "1000" || amount ==="32" ) {
    const image = document.createElement("img");
    image.src = "FourCups.png";
    image.alt = "Four-Eighths Cup";
	image.id = "FourCups";
    imageContainer.appendChild(image);  
  }
   else if  (amount === "5" || amount === "1250" || amount ==="40" ) {
    const image = document.createElement("img");
    image.src = "FiveCups.png";
    image.alt = "Five-Eighths Cup";
	image.id = "FiveCups";
    imageContainer.appendChild(image);
   }
else if  (amount === "6" || amount === "1500" || amount ==="48" ) {
    const image = document.createElement("img");
    image.src = "SixCups.png";
    image.alt = "Six-Eighths Cup";
	image.id = "SixCups";
    imageContainer.appendChild(image);
}
	else if  (amount === "7" || amount === "1750" || amount ==="56" ) {
    const image = document.createElement("img");
    image.src = "SevenCups.png";
    image.alt = "Seven-Eighths Cup";
	image.id = "SevenCups";
    imageContainer.appendChild(image);
	
  }
  else if  (amount === "8" || amount === "2000" || amount ==="64" ) {
    const image = document.createElement("img");
    image.src = "Full1.png";
    image.alt = "Full Cup";
	image.id = "FullCup";
    imageContainer.appendChild(image); 
  }
  else { const image = document.createElement("img");
  image.src = "EmptyBottle.png";
  image.id = "Empty"
   imageContainer.appendChild(image);
  }
  
}




function addCourse() {
  /* fix so that newCourse is course object with the */
  /* same format as the example courses provided */
  /* for you above in the courses array */
  let newCourse = { 
    amount: document.getElementById('amount').value,
    unit: document.getElementById('unit').value
  }; 
  
  /* newCourse should now be a valid course object */
  /* I made the function 'addToArray' below that */
  /* automatically add the course you create in */
  /* this function to the table displaying all of */
  /* the courses (that you worked on in Part 1) */
  addToArray(newCourse);
}
let myClasses = [{
    amount: "2 (example)",
    unit: "cup(s) (example)",
       
  }, ]
 
 function addToArray(newCourse) {
  let amount = parseFloat(newCourse.amount);
  if (!isNaN(amount) && amount >= 0) {
    newCourse.amount = amount.toString();
    newCourse.unit = newCourse.unit.toLowerCase();
    myClasses.push(newCourse);
    let newRow = "<tr id=\"part3\">";
    newRow += "<td>" + newCourse.amount + "</td>";
    newRow += "<td>" + newCourse.unit + "</td>";

    document.getElementById("courseTable").innerHTML += newRow;
  } else {
    alert("Invalid course entered");
  }
}
