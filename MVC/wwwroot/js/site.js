// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready( function () {
    $('#patients_list').DataTable({
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    let column = this;
                    let title = column.footer().textContent;
     
                    // Create input element
                    let input = document.createElement('input');
                    input.placeholder = title;
                    input.setAttribute('id', 'txtSearch' + column.index());
                    if(column.index() == 7){
                        input.value = "YES";
                    }
                    column.footer().replaceChildren(input);
     
                    // Event listener for user input
                    input.addEventListener('keyup', () => {
                        if (column.search() !== this.value) {
                            column.search(input.value).draw();
                        }
                    });
                });
            this.api().column(7).search("YES").draw();
        },
        autoWidth: false,
        language: {
            search: 'Search:',
            info: 'Showing _START_ to _END_ of _TOTAL_ records',
            lengthMenu: 'Show _MENU_ records',
            entries: {
                _: 'patients',
                1: 'patient'
            }
        },
        layout: {
            top2Start: {
                buttons:['excel']
            }
        }
    });    
} );


function calcula_imc_pediatria() {
    let talla = document.querySelector("#pediatria_talla").value;
    let peso = document.querySelector("#pediatria_peso").value;
    if (talla == "" || peso == "") {
        alert("Please complete the weight/height fields");
        document.querySelector("#pediatria_peso").focus();
    } else {
        let imc = document.querySelector("#pediatria_imc");
        talla = parseFloat(document.querySelector("#pediatria_talla").value);
        peso = parseFloat(document.querySelector("#pediatria_peso").value);
        if (talla == 0) {
            alert("Height must be greater than 0");
            document.querySelector("#pediatria_talla").focus();
        } else {
            let imc_parsed = (peso / Math.pow((talla / 100), 2)).toFixed(2).replace(".", ",");
            imc.value = imc_parsed;
        }
    }
}

function calcula_imc_historia() {
    let talla = document.querySelector("#historia_talla").value;
    let peso = document.querySelector("#historia_peso").value;
    if (talla == "" || peso == "") {
        alert("Please complete the weight/height fields");
        document.querySelector("#historia_peso").focus();
    } else {
        let imc = document.querySelector("#historia_imc");
        talla = parseFloat(document.querySelector("#historia_talla").value);
        peso = parseFloat(document.querySelector("#historia_peso").value);
        if (talla == 0) {
            alert("Height must be greater than 0");
            document.querySelector("#historia_talla").focus();
        } else {
            let imc_parsed = (peso / Math.pow((talla / 100), 2)).toFixed(2).replace(".", ",");
            imc.value = imc_parsed;
        }
    }
}

function check_escolaridad_value() {
    let escolaridad = document.querySelector("#EscolaridadId").value;
    let escolaridad_completa = document.querySelector("#EscolaridadCompleta");
    if (escolaridad == 1) {
        escolaridad_completa.disabled = true;
        escolaridad_completa.value = 0;
    }
    else {
        escolaridad_completa.disabled = false;
    }
}
