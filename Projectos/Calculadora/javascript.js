
const previousOperationText = document.querySelector("#previous-operations")
const correntOperationText = document.querySelector("#corrent-operation")
const buttons = document.querySelectorAll("#buttons-container button")

//3
class calculator {

    constructor(previousOperationText, correntOperationText){
        this.previousOperationText = previousOperationText;
        this.correntOperationText = correntOperationText;
        this.correntOperation = "";

    }

    //4 add digito NUMERICOS

    addDigit(digit){
        
        //5 checar se a opera;ao atual ja tem um ponto

        if(digit === "." && this.correntOperationText.innerText.includes(".")){
            return;
        }

        this.correntOperation = digit
        this.updatescreen()

    }

    //6 FAZENDO A OPERACAO

    processOperation(operation){
        if(this.correntOperationText.innerText===""){
            if(this.previousOperationText.innerText!== "" && operation!== "C"){
                this.changeoperation(operation)
            }
            return;
        }
        //7 obter a operation corrent e anterior

        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.correntOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous+current;
                this.updatescreen(operationValue, 
                    operation, 
                    current,
                    previous)

                break;
                case "/":
                operationValue = previous/current;
                this.updatescreen(operationValue, 
                    operation, 
                    current,
                    previous)

                break;
                case "-":
                operationValue = previous-current;
                this.updatescreen(operationValue, 
                    operation, 
                    current,
                    previous)

                break;
                case "*":
                operationValue = previous*current;
                this.updatescreen(operationValue, 
                    operation, 
                    current,
                    previous)

                break;
                case "DEL":
                    
                    this.proccessDEL()

                break;
                case "CE":
                   
                    this.proccessCE()

                break;
                case "C":
                   
                    this.proccessC()

                break;
                case "=":
                   
                    this.proccessIqual()

                break;
             default:
              return;
        }



    }

    //3.1 mudar o valor da calculadora
    updatescreen(
        operationValue = null, 
        operation = null, 
        current = null,
        previous = null){

        if(operationValue === null){
        this.correntOperationText.innerText +=this.correntOperation
        } else{
            // checar se o valo e 0
            if(previous === 0){
                operationValue = current;
            }
            this.previousOperationText.innerText =  `${operationValue} ${operation}`
            this.correntOperationText.innerText = "";
        }
    }

    changeoperation(operation){
        const mathoperation = ["*","/","+","-"]

        if(!mathoperation.includes(operation)){
            return;
        }
        this.previousOperationText.innerText=this.previousOperationText.innerText.slice(0, -1) +operation;
    }

   // delectar o ultimo digitp
    proccessDEL(){
        this.correntOperationText.innerText = this.correntOperationText.innerText.slice(0, -1)

    }

    //eliminar a corrente numero addicionado
    proccessCE(){
        this.correntOperationText.innerText = "";
    }

    // limpar tudo
    proccessC(){
        this.correntOperationText.innerText = "";
        this.previousOperationText.innerText = "";

    }
    //igual
    proccessIqual(){
        const operation = previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation)

    }

}

// funcao da calculadora 

const calc = new calculator(previousOperationText, correntOperationText)

//1 seporar botao numerico do nao numerico
buttons.forEach((botao) => {
    botao.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        //2 converter string em numero usando +

        if(+value >=0 || value === "."){
            calc.addDigit(value)
        }else{
            calc.processOperation(value)
        }
    })
})