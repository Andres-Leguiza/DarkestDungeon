var tabInicial = 1;
$(document).on("ready", main);

function main(){
	
	cargarCurios();
	cargarQuirks();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$("#menu a").on("click", abrirTab);
	$("#acordeonItems").on("click", ".locations" , abrirAcordeon);
	$("#negative").hide();
	$("#positive").on("click", "h2", mostrarQuirksNegativos);
	$("#negative").on("click", "h2", mostrarQuirksPositivos);
	$(".textBox").eq(tabInicial-1).fadeIn();
	$("#menu a").eq(tabInicial-1).addClass("tabActual");
}

function abrirTab(){
	var index = $(this).index();
	if (index == 2) index = 1;
	
	$(".textBox").hide();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$("#menu a").removeClass("tabActual");
	$(".textBox").eq(index).fadeIn();
	$(this).addClass("tabActual");
	
	return false;
}

function mostrarQuirksNegativos(){
	$("#positive").hide();
	$("#negative").show();
}

function mostrarQuirksPositivos(){
	$("#negative").hide();
	$("#positive").show();
}

function abrirAcordeon(){
	var $tab = $(this);
	var n = $tab.parents().size();

	if ($tab.hasClass("acordeonActivado")) {
	$tab.children().eq(1).slideUp("slow");
	$tab.children().eq(0).css("background-image", "url(up-arrow.png)");
	$(".acordeonActivado").removeClass("acordeonActivado");
	return false;
	}
	
	for(var i=0;i<n;i++){
		$(".locations").eq(i).children().eq(1).slideUp("slow");
		$(".acordeonActivado").removeClass("acordeonActivado");
		$(".locations").eq(i).children().eq(0).css("background-image", "url(up-arrow.png)");
	}
	
	$tab.children().eq(1).slideDown("slow");
	$tab.children().eq(0).css("background-image", "url(down-arrow.png)");
	$tab.addClass("acordeonActivado");
}

function cargarCurios(){
	
  $.ajax({
  method: 'GET',
  url: 'curios.html',
  dataType: 'html',
  success: function(responseData) {
    $('#acordeonItems').html(responseData);
  }
});
}

function cargarQuirks(){
	
  $.ajax({
  method: 'GET',
  url: 'positiveQuirks.html',
  dataType: 'html',
  success: function(responseData) {
    $('#positive').html(responseData);
  }
});

  $.ajax({
  method: 'GET',
  url: 'negativeQuirks.html',
  dataType: 'html',
  success: function(responseData) {
    $('#negative').html(responseData);
  }
});
	
}
