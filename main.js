function handleClick() {
    let a = document.getElementById("text").value;
    console.log(a);
    if (a != "") {
        let template = `
    <li>
    ${a}
    <button onclick="done(this)">done</button>
    <button id="1" onclick="del(this)" class="trash">delete</button>
    </li>
    `;

        document.getElementById("content").insertAdjacentHTML("beforeend", template);
        document.getElementById("text").value = "";
    }
}

function del(event) {
    console.log("in finction");
    const item = event.id;
    console.log(item);
}


var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});