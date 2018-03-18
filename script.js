 var button = document.getElementById("but");
 var descr = document.getElementById("descr");
 var clearButt = document.getElementById("reset");
 var info = document.getElementById("info");
 var x = document.getElementById("x");
 var modal = document.getElementById("modal");

 //calculator //

 button.addEventListener("click", function () {
     var weight = parseInt(document.getElementById("weight").value);
     var height = parseInt(document.getElementById("height").value);

     var result = document.querySelector("#result");
     button.classList.add("firstHide");


     var bmi = (weight / Math.pow((height / 100), 2)).toFixed(2);

     if (bmi === "NaN") {
         result.innerHTML = "Proszę wprowadzić poprawne dane"
     } else {
         result.innerHTML = "Twoje BMI wynosi " + bmi;
         descr.innerHTML = "";
     };



     if (bmi < 16) {
         descr.innerHTML = "Wygłodzenie";
         descr.classList.add("highRisk");
     } else if (bmi < 16.99) {
         descr.innerHTML = "Wychudzenie";
         descr.classList.add("highRisk");
     } else if (bmi < 18.49) {
         descr.innerHTML = "Niedowaga";
         descr.classList.add("risk");
     } else if (bmi < 24.99) {
         descr.innerHTML = "Waga prawidłowa";
         descr.classList.add("normal");
     } else if (bmi < 29.99) {
         descr.innerHTML = "Nadwaga";
         descr.classList.add("risk");
     } else if (bmi < 34.99) {
         descr.innerHTML = "I stopień otyłości";
         descr.classList.add("highRisk");
     } else if (bmi < 39.99) {
         descr.innerHTML = "II stopień otyłości";
         descr.classList.add("highRisk");
     } else if (bmi > 40.00) {
         descr.innerHTML = '<p style="color: red;">Otyłość skrajna</p>';
         //                descr.classList.add("highRisk");
     };

     clearButt.classList.add("resetShow");

 });


 // reset //

 clearButt.addEventListener("click", function () {

     result.innerHTML = "";
     descr.innerHTML = "";
     var inputs = document.getElementsByTagName("input");
     for (var i = 0; i < inputs.length; i++) {
         if (inputs[i].type = "text") {
             inputs[i].value = "";
         }
     }

     clearButt.classList.remove("resetShow");
     button.classList.remove("firstHide");

     descr.classList.remove("normal", "risk", "highRisk");
 });


 // modal window //

 info.addEventListener("click", function () {
     modal.classList.add("modalShow");
 })

 x.addEventListener("click", function () {
     modal.classList.remove("modalShow");
 })
