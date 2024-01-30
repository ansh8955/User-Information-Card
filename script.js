
let form = document.querySelector("form");
let main = document.querySelector(".main");
let clear = document.querySelector('#clear');


// console.log(form);

form.addEventListener("submit",(event)=>{
    let Fname = event.target.fname.value;
    let Lname = event.target.lname.value;
    let number = event.target.number.value;
    let country = event.target.country.value;
    let State = event.target.State.value;
    let city = event.target.city.value;
    let village = event.target.village.value;
    let checkStatus = 0;


    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];


    for(let v of userData){
        if(v.number==number || v.fname==Fname ||v.Lname==Lname){
            checkStatus =1;
            break;
        }
    }

    if(checkStatus==1){
        alert("Details Already exist");
    }
    else{

userData.push({
    "fname":Fname,
    "Lname":Lname,
    "number":number,
    "country":country,
    "State":State,
      "city":city,
      "village":village
})

localStorage.setItem("userDetails",JSON.stringify(userData));

event.target.reset();
    }
displayData();


    console.log(userData);
    // console.log(Fname);
    // console.log(Lname);
    // console.log(event);
    event.preventDefault();
// alert("hello")
})

let displayData=()=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let finalData = '';
    userData.forEach((elem,i)=>{
        finalData +=`
        <div class="items">
        <span onclick='removeData(${i})'>&times;</span>
        <h5>First Name:</h5>
        <div>${elem.fname}</div>

        <h5>Last Name:</h5>
        <div>${elem.Lname}</div>


        <h5>Country:</h5>
        <div>${elem.country}</div>


        <h5>Phone Number:</h5> 
        <div>${elem.number}</div>


        <h5>State:</h5>
        <div>${elem.state}</div>


        <h5>City:</h5>
        <div>${elem.city}</div>

        <h5>Village:</h5>
        <div>${elem.village}</div>

    </div>`

    });

    main.innerHTML = finalData;

    // console.log(finalData);

    // console.log(userData);
}

let removeData=(index)=>{

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

userData.splice(index,1);

localStorage.setItem("userDetails",JSON.stringify(userData));


displayData();



}

clear.addEventListener("click",()=>{
localStorage.clear("userDetails");
displayData();
})

displayData();


