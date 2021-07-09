class Calculator{
    constructor(previusDivText, currentDivText){
        this.previusDivText = previusDivText;
        this.currentDivText = currentDivText;
        this.clear();
    }

    clear(){
        this.currentText = "";
        this.previusText = "";
        this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        if(number === "." && this.currentText.includes(".")) return;
        this.currentText = this.currentText.toString() + number.toString();
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentDivText.innerText = this.currentText;
    }
}
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const previusDivText = document.querySelector("[data-previus]");
const currentDivText = document.querySelector("[data-current]");

const calculator = new Calculator(previusDivText, currentDivText);

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()});   
});
