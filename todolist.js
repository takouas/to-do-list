var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();


const todoList = document.getElementById("todoList")
const button = document.getElementById("button")
const input = document.getElementById("todoInput")
const buttonDeletAll = document.getElementById("buttonDeletAll")



function add() {


    let buttonDelet = document.createElement("button");
    let newItem = document.createElement("li")

    newItem.innerText = input.value
    newItem.style.listStyle = "none";
    newItem.style.padding = "20px";
    newItem.style.color = "darkblue";

    // let pressEnter = document.getElementById("button");
    // pressEnter.onkeydown = function () {
    //     if (window.event.keyCode == 13) {
    //         newItem();
    //     }
    // }
    if (input.value === "") {
        alert(" write something!");
    } else {


        todoList.appendChild(newItem);
        input.value = ""
        buttonDelet.innerText = "Delete";

        buttonDelet.style.color = "white";
        buttonDelet.style.backgroundColor = "darkblue";
        buttonDelet.style.border = "none";
        todoList.appendChild(buttonDelet);


    }
    buttonDelet.addEventListener('click', function () {
        buttonDelet.remove()
        newItem.remove()
    });


};
function reloadPage() {
    window.location.reload()
}



// buttonDeletAll.addEventListener('click', function () {

//     function addClass() {
//         let letDeleteAll = document.getElementById("todoList");
//         letDeleteAll.className += "addCSS";
//     }
//     console.log(emchi)
//     node.querySelectorAll('letDeleteAll').forEach(elements => elements.remove());
// });

// function init() {

//     let pressEnter = document.getElementById("button");
//     pressEnter.onkeydown = function () {
//         if (window.event.keyCode == 13) {
//             addItem();
//         }
//     }
// }





// //function to clear todo list array
// var clearList = function () {
//     listArray = [];
//     localStorage.removeItem('todoList');
//     todoList.innerHTML = '';

// }

// document.getElementById("liste").style.display = "flex";

// function removeAll(){
//     document.getElementById("myUL").innerHTML = "";
//  
//   }




// buttonDeletAll.addEventListener('click', function () {
//     todoList.removechild()
//     // arr.pop()
//     // console.log("ba3ed ilpop", arr)
// });


// node.querySelectorAll('*').forEach(n => n.remove());