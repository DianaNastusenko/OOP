var userArr=[];
var user;
User.prototype = superUser.prototype;

$('[type="button"]').click(function () {
  user = createUser();
  if (validation(user)){
    userArr.push(user);
    addTable(user);
    document.getElementById("myform").reset();
  }
});



function validation(user){
  //name validation
  var name = $("[id='name']").val();
  if (!name) {
    alert('Please input name!');
    return false;
  }
  var namePattern = /^[A-z]+$/;
  if (!namePattern.test(name)) {
    alert('Name has to consist only letters!');
    return false;
  }
  
  //birth date validation
   var date = $("[id='birthdate']").val();
  var datePattern = /^([0-3]{1}[0-1]{1})|([0-2]{1}[0-9]{1})\/([1]{1}[0-2]{1})|([0]{1}[1-9]{1})\/\d{4}$/g;  
  if (!datePattern.test(date)){
   alert('Birth date should be in format DD/MM/YYYY')
   return false;   
  }
  
  //phone validation
  var phone = $("[id='phone']").val();
  var phonePattern =  /^[0-9]/;  
  if (!phonePattern.test(phone)){
   alert('Phone number must contain only numbers');
   return false;   
  }
  
    //adress validation
  var adress = $("[id='adress']").val();
  if (!adress){
   alert('Please input adress');
   return false;   
  }
  
  //email validation
  var email = $("[id='email']").val();
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
  if (!emailPattern.test(email)){
   alert('Please input email as example');
   return false;   
  }
  return true;
}

function superUser(){
  SuperUser.prototype.changeDataVisibility = function() {
  return this.isDataVisible = !this.isDataVisible;
  }
}

  
function User(name, sex, date, adress, phone, email) {
  this.name = name;
  this.sex = sex;
  this.date = date;
  this.adress = adress;
  this.phone = phone;
  this.email = email;
  this.isDataVisible = true;
}
  
  function hideRow(){
    
  }
  
function createUser(){
  var name = $('input[id="name"]').val(),
    sex = $('input:radio[name="sex"]:checked').val(),
    date = $('input[id="birthdate"]').val(),
    adress = $('input[id="adress"]').val(),
    phone = $('[id="phone"]').val(),
    email = $('[id="email"]').val();
  var user = new User (name,sex,date,adress,phone,email);
  console.log(user);
  return user;
}

function addTable(user) {
  var table=document.getElementById("Table");
  var countRow=table.rows.length;
  if (countRow==0){
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = 'Name',
    cell2.innerHTML = 'Sex',
    cell3.innerHTML = 'Date',
    cell4.innerHTML = 'Adress',
    cell5.innerHTML = 'Phone',
    cell6.innerHTML = 'Email';
  }
  
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.innerHTML = user.name,
  cell2.innerHTML = user.sex,
  cell3.innerHTML = user.date,
  cell4.innerHTML = user.adress,
  cell5.innerHTML = user.phone,
  cell6.innerHTML = user.email;
}

