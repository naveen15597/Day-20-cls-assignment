
//  fetch To print all countries which has >20cr population
fetch("https://restcountries.eu/rest/v2/all")
.then(data=> data.json())
.then(countries=>{countries.forEach(element => {
    if(element.population>200000000){
        console.log(element.name);
    }
});})
.catch(err=>console.log("please try after sometime"));



// const newFun = (count)=>{
//     return new Promise((resolve,reject)=>{
//         if(count>=0)
//         resolve(setTimeout(()=> document.getElementsByName("para")[0].innerText =count,5000));                
//         else
//         reject(setTimeout(()=>console.log("Happy New year"),1000))
//     });
// }
// let val=10;
// newFun(val).then(newFun(val--)).then(newFun(val--)).then(newFun(val--)).
// catch(err=>console.log(err))
