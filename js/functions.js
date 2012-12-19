$(function(){
	
	if (typeof $.fn.jCarouselLite == 'function') {
		$("#firstCarrucelGalLeft").jCarouselLite({
			btnNext: "#firstCarGalRight",
			btnPrev: "#firstCarGalLeft",
			visible: 1,
			speed: 850				
		});
	}
	
	$(".deparments li:first-child").addClass("noMarginLeft");
	$(".deparments li:last-child").addClass("noMarginRight");
	$("nav ul li:first-child").addClass("firstChild");
	
});

function autorun()
{
}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;