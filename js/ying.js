$(document).ready(function(){ 
	$("a[href^=http]").attr("target", "_blank");
	/*initiate the menu*/
	//add "right arrow" for second-level menus who have sub menu
	$('div#header>ul.nav>li>ul').find('li:has(ul:not(:empty))>a').append("<span class='arrow'>></span>"); 
	//when we hover over the first-level menu and hover out the first-level menu
	$('div#header>ul.nav>li').bind('mouseover',function() { $(this).children('ul').slideDown('fast');}).bind('mouseleave',function(){ $(this).children('ul').slideUp('fast'); }); 
	//when we hover over the second-level menu and hover out the second-level menu
	$('div#header>ul.nav>li>ul li').bind('mouseover',function() { $(this).children('ul').slideDown('fast'); }).bind('mouseleave',function() { $(this).children('ul').slideUp('fast'); });
	$('#sidebar img').mouseover(function(){
		$(this).css('left', '-120px');
	}).mouseleave(function(){
		$(this).css('left', '0');
	}).mouseleave();
	
}); 

