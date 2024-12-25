var input = document.getElementById("in")
var div = document.getElementById("div1")

function add(){
    if(input.value.trim()!==""){

        var ulist = document.createElement("ul")
        var list = document.createElement("li")
        var inbtn = document.createElement("button")
        inbtn.textContent="Delete"
        list.textContent=input.value
        inbtn.onclick=function(){
            list.remove()
            inbtn.remove()
        }
        div.append(ulist)
        div.append(list)
        div.append(inbtn)
    }
    else{
        alert("Please enter a task")
    }
}