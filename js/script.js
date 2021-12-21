const wrapper = document.querySelector("#root");
const calcForm = document.createElement("form");
const btnSubmit = document.createElement("button");
const btnCancel = document.createElement("button");

wrapper.append(calcForm);

btnSubmit.classList.add("btn");
btnSubmit.classList.add("btn-submit");
btnSubmit.type = "submit";
btnSubmit.innerText = "calculate";

btnCancel.classList.add("btn");
btnCancel.classList.add("btn-cancel");
btnCancel.type = "button";
btnCancel.innerText = "cancel";

calcForm.insertAdjacentHTML("beforeend", `
        <lable class="calc-lable">Enter First Number <input name="num1" class="calc-input" type="number" placeholder="first number"></lable>
        <br>
        <lable class="calc-lable">Enter Second Number <input name="num2" class="calc-input" type="number" placeholder="second number"></lable>
        <br>
        <lable class="calc-lable">Choose math operation 
            <select name="operator" class="calc-input">
                <option value="operator" selected>choose operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
        </lable>
        <br>
`);

calcForm.append(btnSubmit, btnCancel);

calcForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    const inputs = calcForm.querySelectorAll("input")
    const select = calcForm.querySelectorAll("select")
    const formData = {}
    inputs.forEach(item => {
        formData[item.name] = item.value
    })
    select.forEach(item => {
        formData[item.name] = item.value
    })
    calculate(formData)
})

function calculate(formData){
    const {num1, num2, operator} = formData;
        let result = null;
        switch
            (operator) {
            case'*':
                result = Number(num1) * Number(num2);
                break
            case '+':
                result = Number(num1) + Number(num2);
                break
            case '-':
                result = Number(num1) - Number(num2);
                break
            case '/':
                result = Number(num1) / Number(num2);
                break
            default:
                result = "not math operation"
        }
        console.log(result);
        render(Math.round(result), formData)
}

function render(result, {num1, num2, operator}){
    console.log(result);
    const calcResult = document.createElement("div");
    if(result<1){
        calcResult.innerText = `not valid result`;
        calcResult.classList.add("calc-result-alert")
        wrapper.after(calcResult);
    } else{
    calcResult.innerText = `Result of operation ${num1} ${operator} ${num2} is ${result}`;
    calcResult.classList.add("calc-result")
    wrapper.after(calcResult);
    }
}

btnCancel.addEventListener("click", ()=>{
    const inputs = calcForm.querySelectorAll("input");
    const select = calcForm.querySelectorAll("select");
    inputs.forEach(item=> {
        item.value = ""
    });
    select.forEach(item=> {
        item.value = "operator"
    })
})