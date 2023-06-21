function hide() {
  document.getElementById("demo").innerHTML = "Enter the details";
  document.getElementById("table").style.display = "none";
  document.getElementById("forms").style.display = "block";
}

var i = 1;

function display() {
  document.getElementById("table").style.display = "none";
  document.getElementById("forms").style.display = "none";
  document.getElementById("demo").innerHTML =
    "Name : Yuvaraj <br> Email : yuvaraj.m@terzocloud.com <br> Age : 20 <br> Position : Intern";
}

function addElement() {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var email = document.getElementById("email");
  var pos = document.getElementById("pos");
  var table = document.getElementById("mytable");
  i += 1;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  var btn = document.createElement("button");
  btn.style.backgroundColor="white";
  btn.style.borderRadius="5px";
  
  btn.textContent = "Delete";

  btn.addEventListener("click", function () {
    row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
  cell2.innerHTML = name.value;
  cell3.innerHTML = `${email.value}`;
  cell4.innerHTML = `${age.value}`;
  cell5.innerHTML = `${pos.value}`;
  cell1.innerHTML = i;
  cell6.appendChild(btn);



  document.getElementById("table").style.display = "block";
  document.getElementById("forms").style.display = "none";
}

function deleteElement() {
  var table = document.getElementById("mytable");

  var id = document.getElementById("id");
  document.getElementById("table").style.display = "block";
  document.getElementById("delete").style.display = "none";
  table.deleteRow(id.value);
}

function deleteEle() {
  document.getElementById("table").style.display = "none";
  document.getElementById("delete").style.display = "block";
}
