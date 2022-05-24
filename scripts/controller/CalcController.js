class CalcController{//criando a class para a calculadora.js reutilizar
    constructor(){//()parametros são informações necessarias para o metodo funcionar, e dentro do {}é: o que eu devo fazer
        //selecionei pelo #id do html com query e esta reservado para usar 
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;//this.currentDate quando tiver o _ informa que o atributo é privado que so quem esta dentro dessa classe consegue conversar com ele
        this.initialize();//chamando o metodo, pois tudo que esta dentro do construtor executa
        this.initButtonsEvents();
    }
    initialize() {//usando arrow function, estou dizendo que: o display=tela da data, recebe currentdate=new date
        
        this.setDisplayDateTime();//chamei o metodo que criei para iniciar aqui

        setInterval(() => {
           this.setDisplayDateTime();//e tbm coloquei dentro de um intervalo de 1seg, para carregar na hora
        }, 1000);//os 1000 é o tempo de intervalor, no caso, a cada milesegundos
        
    }
    setDisplayDateTime() {//criei um método(function) do tempo para usar em outros lugares
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: '2-digit',
            month: 'short',//personalizando como quero que a data apareça
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    //metodo para varios eventos
    addEventListenerALL(element, events, fn) {//nome do metodo(parametros)
        events.split(' ').forEach(event => {//colocando os eventos como array usando split ('aqui é espaço').para cada evento faça => 
            element.addEventListener(event, fn,false);//o btn aqui dentro chama element, entao para cada element(faça o evento, função, qualquer evento difente nao faça nada)
        })
    }

    initButtonsEvents() {
        /**
         * O código abaixo fala: 'com queryselectorall selecionei todos os filhos com tag g do id buttons do html, e do id parts e chamei de buttons
         * na proxima linha: buttons(todos da tag g).forEach(para cada um de dentro)parametros:(chamou de btn)
         * na proxima linha: fica escutando quando clicar nos btn. (o (e) é o nome da função), faça =>{mostra na tela o btn}
         *
         */
       let buttons = document.querySelectorAll('#buttons > g, #parts > g');//selectorall traz todos filhos que estao em buttons e parts
       
       buttons.forEach((btn, index) => {//cada linha vai chamar (btn)
           this.addEventListenerALL(btn, 'click drag', e=>{//addEventListenerALL varios event
                                //element,   events  , fn
               let textBtn = btn.className.baseVal.replace('btn-','');//.className.baseVal.replaca..... deixando so o numero
               
           });
           this.addEventListenerALL(btn, 'mouseover mouseup mousedown', e=>{
                                //element,           events           , fn
               btn.style.cursor = 'pointer';//quando o mouse estiver em cima do btn = cada linha mude o style.cursor = pointer
           });
       });

    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;//retorna o valor que esta guardado em _displayCalc
        //innerHTML fala "coloque uma informação onde vc selecionou"
    }

    set displayCalc(value) {//guardando o value em _displayCalc
        this._displayCalcEl.innerHTML=value;
    }//sempre que criar um atribudo privado é necessario ter é o get e set
    //getters e setters permitem definir como acessar os valuees

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        return this.currentDate = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
      return this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

}

