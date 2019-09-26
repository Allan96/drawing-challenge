var i = 0;

function TypeChange(type, id) {
    $("input#" + id).attr("name", type);
}

function RenderImagem(imagem) {
    return '<table width="600" cellspacing="0" cellpadding="0" border="0" align="center">' +
    '<td width="19"></td>' +
        '<td width="600">' +
        '<center><img src="' + imagem + '" alt="Quantidade de empresas" style="max-width: 570px;display:block; border:none; padding:none; margin:none; "></center> <br>' +
        '</td>' +
        '<td width="19"></td>' +
        '</table>';
}

function RenderTitutlo(value) {
    return '<table width="600" cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td width="40" height="2"></td><td width="100" height="2"><img width="100" height="2" src="http://martinluz.com/clientes/economatica/emkt/20190429-estudo/images/line.png" alt="" style="display:block; border:none; padding:none; margin:none;"></td><td width="460" height="20"></td></tr></tbody></table><table width="600" cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td width="40"></td><td width="520"><font style="font-family: Arial, Helvetica, sans-serif, Verdana, Geneva; font-size: 18px; color: #4a4a4a; line-height: 1.5; text-decoration: none;"><b>' + value + '</b></font> </td><td width="40"></td></tr></tbody></table>';
}

function RenderTexto(value) {
    return '<table width="600" cellspacing="0" cellpadding="0" border="0" align="center"><tbody><tr><td width="40"></td><td width="520"><br><font style="font-family: Arial, Helvetica, sans-serif, Verdana, Geneva; font-size: 13px; color: #4a4a4a; line-height: 1.69; text-decoration: none; ">' + value + '</font> <br><br></td><td width="40"></td></tr></tbody></table>'
}

function RenderLink(linkpost) {
    return '<table width="650" cellspacing="0" cellpadding="0" border="0" align="center">' +
        ' <tbody>' +
        ' <tr>' +
        ' <td width="70" height="70">' +
        ' </td>' +
        '  <td width="255" height="100">' +
        '     <a href="' + linkpost + '" target="_blank">' +
        '     <img src="http://martinluz.com/clientes/economatica/emkt/20190429-estudo/images/btn.png" alt="" style="display:block; border:none; padding:none; margin:none;">' +
        '      </a>' +
        '    </td>' +
        ' </tr>' +
        '</tbody>' +
        ' </table>';
}

$('#teste1button').click(function(e) {

    $('#teste1').append('<div class="input-group mb-3"><div class="input-group-prepend"><select class="custom-select" id="inputGroupSelect01" id="' + i + '" onchange="TypeChange(this.value, ' + i + ');"<option selected>Titulo</option><option value="Texto">Texto</option><option value="Imagem">Imagem</option><option value="Titulo">Titulo</option></select></div><input type="text" class="form-control" id="' + i + '" name="Texto"></div>');
    i++;

});

$(document).ready(function() {
    $('.text').click(function(e) {
        console.log($(this).attr('id'));

    });
});

$("form").submit(function(event) {
    var data = $('#teste1').serializeArray();
    $('gerador').html('');
    var i = 0;
    while (i < data.length) {
        //DEFINE AS VARIAVEIS
        if (data[i]["name"] == 'Titulo') {
            var tabelas = RenderTitutlo(data[i]["value"]);
        } else if (data[i]["name"] == 'Texto') {
            var tabelas = RenderTexto(data[i]["value"].replace(/\n/g, '<br>'));
        } else if (data[i]["name"] == 'Imagem') {
            var tabelas = RenderImagem(data[i]["value"]);
        }
        $('gerador').append(tabelas);

        i++;
    }
    console.log($('#teste1').serializeArray());
    event.preventDefault();
});
