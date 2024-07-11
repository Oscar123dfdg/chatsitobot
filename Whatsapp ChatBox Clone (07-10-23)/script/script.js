var animateButton = function (e) {
    e.preventDefault();
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};
var bubblyButtons = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
$(function () {
    var smsg = "Hi";
    $("#form").submit(function () {
        $("#msend").trigger("click");
        return false;
    });
    var a = "";
    var k = "";
    var d = new Date();
    var h = d.getHours();
    var t = d.getMinutes();
    t = t - 3;
    10 > h ? h = "0" + h : h = h;
    10 > t ? t = "0" + t : t = t;
    12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
    $(".status").html("Ultima vez hoy " + time);
    var lastmsg = ""; var tick = "<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    $(".tick").html(tick);
    // $(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
    $("#msend").click(function () {
        eval(String.fromCharCode(102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 111, 110, 118, 101, 114, 116, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 60, 47, 103, 44, 34, 38, 108, 116, 59, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 62, 47, 103, 44, 34, 38, 103, 116, 59, 34, 41, 125));
        var a = "";
        var scroll = ($(".conversation-container").scrollTop()) + 1550;
        var d = new Date();
        var h = d.getHours();
        var t = d.getMinutes();
        10 > h ? h = "0" + h : h = h;
        10 > t ? t = "0" + t : t = t;
        12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
        var msg = $("#val").val().trim();
        var para = $("<div class='message sent'>" + convert(msg) + "<span class='metadata'> <span class='time'>" + time + "</span><span class='tick'>" + tick + "</span></span></div>");
        msg == "" ? $("#val").focus() : ($("#ap").append(para), $(".status").css("margin-left", "0"),
            $("#form")[0].reset(), setTimeout(function () { $(".status").html("online ") }, 900), setTimeout(function () { $(".status").html("escribiendo... ") }, 1000), lastmsg = msg.toUpperCase().trim(), $(".conversation-container").scrollTop(scroll), send());
    });
    $("#name").html("ChatsitoBot");

    function send() {
        var sr = lastmsg.split(" ");
        var search = "";
        scroll = ($(".conversation-container").scrollTop()) + 155065;
        for (x = 0; x < sr.length; x++) {
            search += sr[x] + "+";
        }
        var a = "";
        var d = new Date();
        var h = d.getHours();
        var t = d.getMinutes();
        10 > h ? h = "0" + h : h = h;
        10 > t ? t = "0" + t : t = t;
        12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
        var hello = ["HOLA", "HOLA QUE TAL", "HEY", "HOLA AMIGO"];
        var gm = ["BUENOS DÍAS", "BUEN DÍA", "BUEN DÍA ", "BUEN DÍA "];
        var bad = ["MAL", "NO TAN MAL", "INÚTIL", "NO FUNCIONA", "NO ES BUENO"];
        var ge = ["BUENAS TARDES", "BUENA TARDE", "BUENA TARDE ", "BUENA TARDE "];
        var gn = ["BUENAS NOCHES", "TENGO SUEÑO"];
        var welcome = ["BIEN HECHO", "BUEN CÓDIGO", "BUENO", "WOW", "WOW FUNCIONA", "GRAN CÓDIGO", "CÓDIGO ASOMBROSO", "ES BUENO", "CÓDIGO IMPRESIONANTE", "ESTÁ BIEN", "OH DIOS MÍO", "OMG", "OHO", "ENCANTADO DE CONOCERTE", "ENCANTADO DE VERTE"];
        var s2u = ["TE ODIO", "TE AMO", "TE EXTRAÑO"];
        var gaf = ["BUENAS TARDES", "BUENA TARDE ", "BUENA TARDE "];
        var like = ["BIEN", "👍🏻", "☺️", "😅", "JAJA", "YO TAMBIÉN"];
        var hru = ["¿CÓMO ESTÁS?", "¿CÓMO TE VA?", "¿QUÉ TAL?", "¿CÓMO TE SIENTES?"];
        var good = ["ESTOY BIEN", "ME SIENTO BIEN", "TODO BIEN", "FENOMENAL", "INCREÍBLE"];
        var wru = ["¿QUIÉN ERES?", "¿CÓMO TE LLAMAS?", "¿QUIÉN ERES TÚ?", "¿QUÉ NOMBRE TIENES?", "¿CÓMO TE LLAMAS?"];
        var wrud = ["¿QUÉ ESTÁS HACIENDO?", "¿QUÉ HACES?", "¿QUÉ PASA?", "¿QUÉ TAL?"];
        var bye = ["ADIOS", "HASTA LUEGO", "CHAO", "NOS VEMOS"];
        var th = ["GRACIAS", "MUCHAS GRACIAS"];
        var qu = ["¿QUÉ?", "¿QUÉ?", "¿CUÁL?", "¿CUÁL?", "¿CUÁNDO?", "¿CUÁNDO?", "¿EN SERIO?"];
        var ok = ["HMM", "HMMM", "HMMMM", "VALE", "OK", "KK", "OKK", "OK?", "OK ?", "SÍ"];

        var laptop = ["LAPTOP", "PORTÁTIL", "COMPUTADORA", "EQUIPO", "ORDENADOR"];
        var brand = ["DELL", "HP", "ASUS", "APPLE", "LENOVO"];
        var feature = ["PANTALLA", "PROCESADOR", "MEMORIA", "ALMACENAMIENTO", "BATERÍA"];
        var action = ["COMPRAR", "ADQUIRIR", "VER", "BUSCAR", "ENCONTRAR"];
        var tecno = ["Qué procesador tiene","que procesador tiene", "que procesador es el mejor", "que procesador es bueno", "que procesador es bueno", "que"];

        function isInArray(x, y) { return x.indexOf(y) > -1; }
        isInArray(hello, lastmsg) == true ? (smsg = "Hola, ¿cómo estás? 😊", k = "Hola, ¿cómo estás? ") :
            isInArray(wru, lastmsg) == true ? (smsg = "Soy ChatsitoBot 🤖", k = smsg) :
                isInArray(bad, lastmsg) == true ? (smsg = "Gracias por tus comentarios, intentaré mejorar.😇", k = smsg) :
                    isInArray(wrud, lastmsg) == true ? (k = "Nada especial, ¿y tú? ", smsg = k + "☺️") :
                        isInArray(bye, lastmsg) == true ? (smsg = "Gracias por visitar mis plataformas sociales. Si te gustó mi contenido, te invito a que sigas, suscribas y sigas nuestras plataformas sociales @LapStore ", k = smsg,
                            setTimeout(function () { $(".status").html("Última vez " + time) }, 6000),
                            setTimeout(function () { $(".status").css("margin-left", "-50") }, 8000)) :
                            isInArray(th, lastmsg) == true ? (k = "De nada ", smsg = k + "😇") :
                                isInArray(gm, lastmsg) == true ? (k = "Buenos días ", smsg = k + "😇") :
                                    isInArray(gn, lastmsg) == true ? (smsg = "Buenas noches", k = smsg) :
                                        isInArray(welcome, lastmsg) == true ? (smsg = "Gracias", k = smsg) :
                                            isInArray(s2u, lastmsg) == true ? (smsg = "Tú también", k = smsg) :
                                                isInArray(qu, lastmsg) == true ? (k = "No lo sé ", smsg = k + "😕") :
                                                    isInArray(ge, lastmsg) == true ? (k = "Buenas tardes ", smsg = k + "😇") :
                                                        isInArray(ok, lastmsg) == true ? (smsg = "hmm", k = smsg) :
                                                            isInArray(gaf, lastmsg) == true ? (k = "Buenas tardes", smsg = k + "😇") :
                                                                isInArray(like, lastmsg) == true ? (smsg = "<font size=6>👍🏻</font>", k = "ok") :
                                                                    isInArray(good, lastmsg) == true ? (smsg = "Me alegra escucharlo. 😊", k = "Me alegra escucharlo. ") :
                                                                        isInArray(hru, lastmsg) == true ? (smsg = "Estoy bien, ¿y tú? ", k = smsg) :
                                                                            isInArray(laptop, lastmsg) == true ? (smsg = "¿Estás buscando una laptop en particular?", k = smsg) :
                                                                                isInArray(brand, lastmsg) == true ? (smsg = "¡Genial! Tenemos varias opciones de " + lastmsg + " disponibles.", k = smsg) :
                                                                                    isInArray(feature, lastmsg) == true ? (smsg = "¿Te gustaría más información sobre la " + lastmsg + "?", k = smsg) :
                                                                                        isInArray(action, lastmsg) == true ? (smsg = "Para " + lastmsg + " una laptop, por favor visita nuestra sección de productos.", k = smsg) :
                                                                                        isInArray(tecno, lastmsg) == true ? (smsg = "Intel Core i7 de décima generación " + lastmsg + "Intel Core i7 de décima generación", k = smsg) :
                                                                                        lastmsg.substring(0, 6) == "Busca" ? (search = lastmsg.slice(7), smsg = "<b align='center'>Estos son los mejores resultados </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q=" + search + "'></iframe>", k = "Estos son los mejores resultados") :
                                                                                                (smsg = "Lo siento, no entendí, por favor explícalo con ortografía correcta o si quieres puedo buscarlo por ti. Para buscar, <br> escribe <q><b> Buscar Tu palabra clave </b></q> por ejemplo escribe: <b>Buscar Tiktok</b>", k = "Lo siento, no entendí, por favor explícalo con ortografía correcta o si quieres puedo buscarlo por ti. Para buscar, escribe, Buscar Tu palabra clave, por ejemplo, escribe, Buscar ChatBot ");
        para = $("<div class='message received'>" + smsg + "<span class='metadata'> <span class='time'>" + time + "</span></span></div>");
        setTimeout(function () {
            $('#ap').append(para); $(".status").html("online");
            $(".conversation-container").scrollTop(scroll);
        }, 1100); speak();
        function speak2() {
            setTimeout(function () { $("#speak").click(); })
        }
        $("#speak").click(function () {
            responsiveVoice.speak(k);
        })
        function speak() {
            responsiveVoice.speak(k);
        }
    }

});


