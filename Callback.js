function userdetails(id,getsubj)
{
  console.log("Get user details by id:",id);
  getsubj({roll:"45"})
};
function getsubj(roll,marks)
{
    console.log("Get subjects by roll number",roll);
    marks({subid:"Eng"})
};
function marks(usersubid){
    console.log("Getting user marks",usersubid);
};
userdetails("23A91A",function(roll){
 getsubj(roll,function(usersubid){
  marks(usersubid)
 })
});