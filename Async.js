function getUserdetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll:"678"})
        },2000);
    })
};
const myfun= async()=>{
    console.log("123");
    console.log("456");
    const result=await getUserdetails("123");
    console.log(result);
};
myfun();