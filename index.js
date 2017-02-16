var db = new WebDB('AndelaDatabase', { synch: true, synchUrl: '/api/webdb/synch' });

var Users = db.createTable('Users', {
  'fullName': { type: String, pk: true, unique: true },
  'password': { type: String, version: true }
});

function regUser() {
  var domFullName = document.getElementById("fullName").value;
  var dpmPassword = document.getElementById("password").value;
  Users.set({ fullName: domFullName, password: dpmPassword });

  var newUser = AndelaDatabase.get(1);

  newUser.prototype.constructor === Object;

  function User(obj) {
    this.fullName = obj && obj.fullName !== undefined ? obj.fullName : null;
    this.password = obj && obj.password !== undefined ? obj.password : null;
  }
if(fullName && password){
	window.location = "booking.html";
}else{
	console.log("Please input username and password");
}
}
