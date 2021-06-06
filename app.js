display();

// <------------------------offline event-------------------------------->

function off() {
    alert("plz check you are offline! you can't fetch data")   
}
window.addEventListener("offline", off)


// <-------instantiating ajax request----------------------------------->

let btn = document.getElementById('fetchBtn')
btn.addEventListener('click',display)

function display() {
    
const request = new XMLHttpRequest();

request.open('GET','https://api.covid19india.org/data.json',true)

request.onload = function(){

if (this.status==200) {
    // console.log(this.responseText);
    let jason = JSON.parse(this.responseText)
    let state = jason.statewise;
    // console.log(state);

    let html= "";
    state.forEach(function(element,index){
        html += `<tr class= "tbl">
                    <th>${element.state}</th>
                    <td>${element.active}</td>
                     <td>${element.confirmed}</td>
                    <td>${element.recovered}</td>
                    <td>${element.deaths}</td>
                </tr>
                `
    });
          document.getElementById('tablebody').innerHTML= html ;
}
else{
    // console.log('some error accurd');
}
}
request.send()
}


// <--------------------search button operation -------------------------->

let myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click',submit)
function submit(e) {
    e.preventDefault();
    let myform = document.getElementById('myform').value
     let state = document.getElementsByClassName('tbl')
    // console.log(state)
    Array.from(state).forEach(function (element) {
        let cardval = element.getElementsByTagName('th')[0].innerText
        // console.log(cardval);

        if (cardval.includes(myform)) {
            element.style.background = "red";

        }
        else {
            element.style.display = "none";
        }
    })
}
// <---------------time function---------------->
let d = new Date();
document.getElementById('clock').innerHTML=d;

console.log(d);