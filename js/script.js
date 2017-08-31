$(document).ready(function() {
	var link = $('.window');
	var link_active = $('.menu-link_active');
	var menu = $('.menu')

	link.click(function() {
		link.toggleClass('menu-link_active')
		menu.toggleClass('menu_active')
	});
});