let enterCase = document.querySelector(".enter-case"),
    caseContainer = document.querySelector('.case-container'),
    value = document.querySelectorAll(".value");


let countAllCases = getCountCase(),
    countCompleted = getCountCase();

enterCase.addEventListener('keydown',
    function (event) {
        if (event.key == "Enter" && enterCase.value != "") {
            createNewCase();
            value[0].textContent = countAllCases("+");
        }
    });

caseContainer.addEventListener("click", function (event) {
    if (event.target.className == "btn") {
        event.target.parentElement.remove();
        value[0].textContent = countAllCases("-");
        value[1].textContent = countCompleted("+");
    }

});

function createNewCase() {
    let newCase = document.createElement("DIV"),
        newDelBtn = document.createElement("DIV"),
        newCaseName = document.createElement("LABEL");

    newCase.className = "new-case";
    caseContainer.appendChild(newCase);

    newDelBtn.className = "btn";
    newCase.appendChild(newDelBtn);

    newCase.appendChild(newCaseName);
    newCaseName.setAttribute("for", "btn");
    newCaseName.textContent = enterCase.value;

    enterCase.value = "";
}

function getCountCase() {
    let count = 0;
    return function (znak) {
        if (znak == "+") {
            return ++count;
        }
        else if (znak == "-") {
            return --count;
        }
    };
}

