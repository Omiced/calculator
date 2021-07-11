class Calculator{
    constructor(previusDivText, currentDivText){
        this.previusDivText = previusDivText;
        this.currentDivText = currentDivText;
        this.readyToReset = false; 
        this.clear();
    }

    clear(){
        this.previusText = "";
        this.currentText = "";
        this.operation = undefined;
    }

    delete(){
        this.currentText = this.currentText.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === "." && this.currentText.includes(".")) return;
        this.currentText = this.currentText.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentText === "") return;
        if(this.previusText !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previusText = this.currentText;
        this.currentText = "";
    }

    compute(){
        let result;
        const prev = parseFloat(this.previusText);
        const current = parseFloat(this.currentText);
        if(isNaN(prev)||isNaN(current)) return;
        switch(this.operation){
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
            default: return;
        }

        this.currentText = result;
        this.operation = undefined;
        this.previusText = "";
    }

    getDisplayNumber(number){
        const stringNumber =  number.toString();
        const integerNumbers = parseFloat(stringNumber.split(".")[0]);
        const decimalNumbers = stringNumber.split(".")[1];
        let integerDisplay;
        if(isNaN(integerNumbers)){
            integerDisplay="";
        } else{
            integerDisplay = integerNumbers.toLocaleString("en", {
                maximumFractionDigits: 0
            });
        }
        if(decimalNumbers != null){
            return `${integerDisplay}.${decimalNumbers}`;
        } else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        this.currentDivText.innerText = this.currentText;
        if(this.operation !=null){
            this.previusDivText.innerText = `${this.getDisplayNumber(this.previusText)} ${this.operation}`
        } else{
            this.previusDivText.innerText = "";
        }
    }
}
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const previusDivText = document.querySelector("[data-previus]");
const currentDivText = document.querySelector("[data-current]");
const clearBtn = document.querySelector("[data-clear]");

const calculator = new Calculator(previusDivText, currentDivText);

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()});   
});

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()});   
});

equalsBtn.addEventListener("click",() => {
    calculator.compute()
    calculator.updateDisplay()
});

clearBtn.addEventListener("click", () =>{
    calculator.clear()
    calculator.updateDisplay()
});

deleteBtn.addEventListener("click",()=>{
    calculator.delete()
    calculator.updateDisplay()
});