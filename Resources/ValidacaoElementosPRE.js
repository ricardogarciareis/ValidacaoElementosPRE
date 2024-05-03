$(document).ready(function(){
    $("#staticBackdrop").modal("show");
    $("#file-selector").val(null);
    
    checkRadio2();
    validarElementos();
    
    //$("#num-registo").val("578");
});

// accessing the radioModelo buttons
let radioModelo01 = document.getElementById('radioModelo01');
let radioModelo02 = document.getElementById('radioModelo02');
let radioModelo03 = document.getElementById('radioModelo03');
let radioModelo04 = document.getElementById('radioModelo04');
let radioModelo05 = document.getElementById('radioModelo05');

// accessing the radioTipo buttons
let radioTipo01 = document.getElementById('radioTipo01');
let radioTipo02 = document.getElementById('radioTipo02');
let radioTipo03 = document.getElementById('radioTipo03');
let radioTipo04 = document.getElementById('radioTipo04');
let radioTipo05 = document.getElementById('radioTipo05');
let radioTipo06 = document.getElementById('radioTipo06');
let radioTipo07 = document.getElementById('radioTipo07');
let radioTipo08 = document.getElementById('radioTipo08');
let radioTipo09 = document.getElementById('radioTipo09');
let radioTipo10 = document.getElementById('radioTipo10');
let radioTipo11 = document.getElementById('radioTipo11');
let radioTipo12 = document.getElementById('radioTipo12');

// accessing the radioTipo div buttons
let radioDivTipo01 = document.getElementById('tipoOriginal');
let radioDivTipo02 = document.getElementById('tipoHibridizacao');
let radioDivTipo03 = document.getElementById('tipoSobreequipamento');
let radioDivTipo04 = document.getElementById('tipoReequipamento');
let radioDivTipo05 = document.getElementById('tipoTransmissao');
let radioDivTipo06 = document.getElementById('tipoAltDenSocial');
let radioDivTipo07 = document.getElementById('tipoProrrogPrazo');
let radioDivTipo08 = document.getElementById('tipoAltLocalizacaoCentral');
let radioDivTipo09 = document.getElementById('tipoAltTecnolCombFonte');
let radioDivTipo10 = document.getElementById('tipoAltQtdEquipamentos');
let radioDivTipo11 = document.getElementById('tipoAutorizTestesEnsaios');
let radioDivTipo12 = document.getElementById('tipoVistoriaEmissaoLE');


// radioModelo buttons checked state
radioModelo01.checked = true;

// radioTipo buttons hidden state
radioDivTipo01.hidden = false;
radioDivTipo02.hidden = false;
radioDivTipo03.hidden = false;
radioDivTipo04.hidden = true;
radioDivTipo05.hidden = true;
radioDivTipo06.hidden = true;
radioDivTipo07.hidden = true;
radioDivTipo08.hidden = true;
radioDivTipo09.hidden = true;
radioDivTipo10.hidden = true;
radioDivTipo11.hidden = true;
radioDivTipo12.hidden = true;


// apply checkRadio function to every radioModelo's change event
if (document.querySelector('input[name="radioModelo"]')) {
    document.querySelectorAll('input[name="radioModelo"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
            checkRadio();
        });
    });
}

// checkRadio function
function checkRadio(){
    // Licença de Produção checked
    if(radioModelo01.checked){
        radioTipo01.checked = true;
        radioDivTipo01.hidden = false;
        radioDivTipo02.hidden = false;
        radioDivTipo03.hidden = false;
        radioDivTipo04.hidden = true;
        radioDivTipo05.hidden = true;
        radioDivTipo06.hidden = true;
        radioDivTipo07.hidden = true;
        radioDivTipo08.hidden = true;
        radioDivTipo09.hidden = true;
        radioDivTipo10.hidden = true;
        radioDivTipo11.hidden = true;
        radioDivTipo12.hidden = true;
    }
    // Alteração Não Substancial de Licença de Produção checked
    if(radioModelo02.checked){
        radioTipo04.checked = true;
        radioDivTipo01.hidden = true;
        radioDivTipo02.hidden = true;
        radioDivTipo03.hidden = true;
        radioDivTipo04.hidden = false;
        radioDivTipo05.hidden = false;
        radioDivTipo06.hidden = false;
        radioDivTipo07.hidden = false;
        radioDivTipo08.hidden = true;
        radioDivTipo09.hidden = true;
        radioDivTipo10.hidden = true;
        radioDivTipo11.hidden = true;
        radioDivTipo12.hidden = true;
    }
    // Alteração checked
    if(radioModelo03.checked){
        radioTipo08.checked = true;
        radioDivTipo01.hidden = true;
        radioDivTipo02.hidden = true;
        radioDivTipo03.hidden = true;
        radioDivTipo04.hidden = true;
        radioDivTipo05.hidden = true;
        radioDivTipo06.hidden = true;
        radioDivTipo07.hidden = true;
        radioDivTipo08.hidden = false;
        radioDivTipo09.hidden = false;
        radioDivTipo10.hidden = false;
        radioDivTipo11.hidden = true;
        radioDivTipo12.hidden = true;
    }
    // Licença de Exploração checked
    if(radioModelo04.checked){
        radioTipo11.checked = true;
        radioDivTipo01.hidden = true;
        radioDivTipo02.hidden = true;
        radioDivTipo03.hidden = true;
        radioDivTipo04.hidden = true;
        radioDivTipo05.hidden = true;
        radioDivTipo06.hidden = true;
        radioDivTipo07.hidden = true;
        radioDivTipo08.hidden = true;
        radioDivTipo09.hidden = true;
        radioDivTipo10.hidden = true;
        radioDivTipo11.hidden = false;
        radioDivTipo12.hidden = false;
     }
     // Licença de Produção - UPAC checked
     if(radioModelo05.checked){
        radioTipo01.checked = true;
        radioDivTipo01.hidden = false;
        radioDivTipo02.hidden = false;
        radioDivTipo03.hidden = true;
        radioDivTipo04.hidden = true;
        radioDivTipo05.hidden = true;
        radioDivTipo06.hidden = true;
        radioDivTipo07.hidden = true;
        radioDivTipo08.hidden = true;
        radioDivTipo09.hidden = true;
        radioDivTipo10.hidden = true;
        radioDivTipo11.hidden = true;
        radioDivTipo12.hidden = true;
     }
 }

// fileSelector actions
let listaFicheirosEntregues = [];

const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
        const files= event.target.files;
        listaFicheirosEntregues = [];
        for (let i = 0; i < files.length; i++) {
            listaFicheirosEntregues.push(files[i].name);
        }  
        listaFicheirosEntregues.sort();
        for (let i = 0; i < listaFicheirosEntregues.length; i++) {
            // listaFicheiros presentation
            var para = document.createElement("p");
            para.setAttribute("style", "font-size:14px; margin-bottom: 0px;");
            var node = document.createTextNode((i+1) + " - " + listaFicheirosEntregues[i]);
            para.appendChild(node);
            var element = document.getElementById("lista-ficheiros-entregues");
            element.appendChild(para);
        } 
        validarElementos();
});

function limparEntregues() {
    var entregues = document.getElementById("lista-ficheiros-entregues");
    while (entregues.firstChild) {
        entregues.firstChild.remove();
    }
}

let listaFicheirosEmFalta = [];
function validarElementos() {
    listaFicheirosEmFalta = [];
    limparEmFalta();
    for (let i = 0; i < listaFicheirosObrigatorios.length; i++) {
        if(!listaFicheirosEntregues.includes(listaFicheirosObrigatorios[i])) {
            listaFicheirosEmFalta.push(listaFicheirosObrigatorios[i]);
        }
    }

    for (let i = 0; i < listaFicheirosEmFalta.length; i++) {
        var paraFalta = document.createElement("p");
        paraFalta.setAttribute("style", "font-size:14px; margin-bottom: 0px;");
        var nodeFalta = document.createTextNode((i+1) + " - " + listaFicheirosEmFalta[i]);
        paraFalta.appendChild(nodeFalta);
        var elementFalta = document.getElementById("lista-ficheiros-emfalta");
        elementFalta.appendChild(paraFalta);
    }
}

function limparEmFalta() {
    var emfalta = document.getElementById("lista-ficheiros-emfalta");
    while (emfalta.firstChild) {
        emfalta.firstChild.remove();
    }
}

function limparObrigatorios() {
    var obrigatorios = document.getElementById("lista-ficheiros-obrigatorios");
    while (obrigatorios.firstChild) {
        obrigatorios.firstChild.remove();
    }
}