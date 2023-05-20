const inp = document.getElementById("input");
console.log(inp)
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        let a = document.createElement("li");
        a.classList.add("del")
        document.body.appendChild(a);
        a.innerText = inp.value;
        let b = document.createElement("button");
        b.classList.add("btn");
        document.body.appendChild(b);
        b.innerText = "Delete"
        inp.value = "";
        b.addEventListener("click", (event) => {
            a.remove();
            b.remove();
        })
    } 
});
