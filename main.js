var names = ["Family Book","Vidya Sangolli","Kunal Sangolli","Rajrishi Sangolli"];

var i = 0; 
function update() {
i++;
var number_of_family_members = 3
if(i > number_of_family_members){
i = 0
}
var updatedName = names[i];
document.getElementById("family_member_name").innerHTML = updatedName;
}