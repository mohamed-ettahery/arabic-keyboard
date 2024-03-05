$(function(){
    
    $("#txtArea").focus();
    
$(".clavier input").on("click",function(){
    "use strict";
    $("#txtArea").focus();
    $("#txtArea").val($("#txtArea").val()+$(this).val());
    $("#searchBox span").text($("#txtArea").val());
    $("#searchBox a").attr("href","https://www.google.com/search?q="+$('#txtArea').val()+"&oq="+$('#txtArea').val()+"");
});
$("#tab").on("click",function(){
    "use strict";
    $("#txtArea").focus();
     $("#txtArea").val($("#txtArea").val()+$(this).val());
});
$("#back").on("click",function(){
   "use strict";
    var txtValue = $("#txtArea").val();
    
    
//    alert(txtValue.substr(0,txtValue.length - 1));
    $("#txtArea").focus();
    
    $("#txtArea").val(txtValue.substr(0,txtValue.length - 1));
});

    
$("#zid").on("click",function(){
   "use strict";
    $("#txtArea").focus();
    var fs = $("#txtArea").css('fontSize');
    var fsr = fs.substr(0,fs.length-2);
    fsr = parseInt(fs);
     txtArea.style.fontSize = (fsr+5)+"px";
    
});
$("#n9es").on("click",function(){
   "use strict";
    $("#txtArea").focus();
    var fs = $("#txtArea").css('fontSize');
    var fsr = fs.substr(0,fs.length-2);
    fsr = parseInt(fs);
     txtArea.style.fontSize = (fsr-5)+"px";
    
});
$("#copier").on("click",function(){
   "use strict";
    $("#txtArea").select();
});

$("#txtArea").on("input",function(){
    "use strict";
    $("#searchBox span").text($("#txtArea").val());
    $("#searchBox a").attr("href","https://www.google.com/search?q="+$('#txtArea').val()+"&oq="+$('#txtArea').val()+"");
});
$("#copyright-year").text(new Date().getFullYear());
    });