let menu = prompt("Digite '1' para iniciar a calculadora\nDigite '0' para sair do programa")
switch(menu){
    case '1':
    //Menu de escolha da operação
    let menuPrincipal = prompt("Escolha a opção \n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão");
    //Declaração de duas variáveis para serem atribuidas pelo usuário
    let a = parseFloat(prompt("Escreva o valor do primeiro número:"))
    let b = parseFloat(prompt("Escreva o valor do segundo número:"))
    //Escolha de menu
    switch(menuPrincipal){
        case '1':
            let soma = a + b;
            alert(soma);
            break;
        case '2':
            let subtract = a - b;
            alert(subtract);
            break;
        case '3':
            let mult = a * b;
            alert(mult)
            break;
        case '4':
            let div = a / b;
            alert(div);
            break;
            default:
            alert("Operação Inválida");
    }
    break;
    case '0':
        alert("Saindo do programa");
    break;
    default:
        alert("Operação Inválida")  ; 
}
    
