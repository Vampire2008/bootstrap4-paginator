/** 
* bootstrap-paginator.ru.js
* Tooltip localisation for russian language
* Copyright (c) 2019 Kislenko Mikhail
* Licensed under the MIT License
*/
(function($) {
	if (!$.fn.bootstrapPaginator) return;
	if (!$.fn.bootstrapPaginator.hasOwnProperty("regional")) 
		$.fn.bootstrapPaginator.regional = {};
	$.fn.bootstrapPaginator.regional["ru"] = {
		first: "В начало",
		prev: "Предыдущая",
		next: "Следующая",
		last: "В конец",
		current: "Страница № ",
		page: "Перейти к "
	}
})(window.jQuery);