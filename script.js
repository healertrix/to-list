let buttonAdd = document.getElementById("add-bttn");
let ul = document.querySelector("ul");
let input = document.getElementById("textarea");
let i = 0;


ul.addEventListener("click", actiontaker);
buttonAdd.addEventListener("click", content_adder);
input.addEventListener("keypress", contentOnkey);
 
function checkInput() {
   return (input.value.length);
}
function contentOnkey(event) {
   if (event.which === 13 && checkInput()) {
      let addingelement = `<input type="checkbox" name="switch" class="check" />
    <span class="list-content  "  id="cheker1" >${input.value}</span>
    <button class="button-delete" name="delete">🗑️</button>`;

      let li = document.createElement("li");
      console.log(input.value);
      li.innerHTML = addingelement;
      li.classList.add("animater");
      ul.appendChild(li);
      input.value = "";
      i++;
   };
}

function content_adder() {
   if (checkInput()) {
      let addingelement = `<input type="checkbox" name="switch" class="check" />
    <span class="list-content " >${input.value}</span>
    <button class="button-delete" name="delete">🗑️</button>`;

   let li = document.createElement("li");
   console.log(input.value);
      li.innerHTML = addingelement;
      li.classList.add("animater");
      ul.appendChild(li);
      input.value = '';
   }
   
  
}

function actiontaker(e) {
   if (e.target.name == "switch") {
      striker(e);
   }
   if (e.target.name == "delete") {
     deleter(e);
   }
}

function striker(e) {
   let parentli = e.target.parentNode;
   if (parentli.classList.contains("done")) {
      parentli.classList.toggle("done");
   }
   else {
      parentli.classList.toggle("done");
   }
}

function deleter(e) {
   let parentli = e.target.parentNode;
   parentli.classList.add("animater-add");
   parentli.addEventListener("transitionend", function() {
   parentli.remove();
      
   })

}