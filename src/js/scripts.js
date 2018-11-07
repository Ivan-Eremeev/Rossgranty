$(document).ready(function () {

	// Изменение цвета при выборе баллов в модалке
	$(".expertise-modal_radio label").on('click', function() {
		var $this = $(this),
				data = $this.data('select'),
				allLabel = $this.siblings('label');
		allLabel.removeClass('red');
		allLabel.removeClass('green');
		allLabel.removeClass('yellow');
		allLabel.removeClass('redLight');
		allLabel.removeClass('yellowLight');
		allLabel.removeClass('greenLight');
		if (data <= 3) {
			allLabel.addClass('redLight');
			$this.addClass('red');
		}
		else if (data > 3 && data <=7) {
			allLabel.addClass('yellowLight');
			$this.addClass('yellow');
		}
		else if (data > 7) {
			allLabel.addClass('greenLight');
			$this.addClass('green');
		}
	});

	// Tooltipster Всплывающая подсказка
	$('.expertise-modal_question').tooltipster({
		theme : 'tooltipster-noir',
		delayTouch: 0,
	});
	var expertTooltip = $('.expert-delete_item').tooltipster({
		theme: 'tooltipster-light',
   	trigger: 'hover',
   	maxWidth: 200,
   	minWidth: 200,
   	contentAsHTML: true,
   	interactive: true,
   	side:  ['right', 'top', 'bottom', 'left'],
   	zIndex: 97,
	});

	// Отключение подсказки на мобильных
	function tooltipDisable() {
		if (window.matchMedia('(max-width: 900px)').matches) {
			expertTooltip.tooltipster('disable');
		}
		else if (window.matchMedia('(min-width: 901px)').matches) {
			expertTooltip.tooltipster('enable');
		}
	};

	tooltipDisable();

	// Аккордеон
	$('.review-accordeon_trigger').click(function() {
		var trigger = $(this),
				allTrigger = trigger.parent().parent().find('.review-accordeon_trigger'),
				content = trigger.siblings('.review-accordeon_content'),
				allContent = trigger.parent().parent().find('.review-accordeon_content'),
				time = 300;
		if (!content.hasClass('open')) {
			allContent.stop().slideUp(time).removeClass('open');
			content.stop().slideDown(time).addClass('open');
			allTrigger.removeClass('active');
			trigger.addClass('active');
		}
		else {
			content.stop().slideUp(time).removeClass('open');
			trigger.removeClass('active');
		}
	});

	// Autosize Изменение высоты текстового поля при добавлении контента
	autosize($('textarea'));

	// Попап "подтверждение снятия эксперта"
	$('.modal-trigger').on('click', function() {
		var data = $(this).data('modal'),
				modalOver = $('.modal_over'),
				modal = $('#modal-' + data);
		modal.toggleClass('open')
		.next('.modal_over').toggleClass('open');
		$('.modal_close').on('click', function() {
			modal.removeClass('open'),
			modalOver.removeClass('open');
		});
		modalOver.on('click', function() {
			modal.removeClass('open');
			modalOver.removeClass('open');
		});
	});

	$(window).resize(function() {
		tooltipDisable();
	});

	// Мобильное меню
	$('.menuBtn').click(function () {
		var menu = $(this).siblings('#menu');
		// var over = $(this).siblings('.menu_over');
		var btn = $(this);
		menu.toggleClass('open');
		// btn.toggleClass('is-active');
		// over.click(function() {
		// 	menu.removeClass('open');
		// 	btn.removeClass('is-active');
		// });
		menu.find('a').click(function() {
			menu.removeClass('open');
			// btn.removeClass('is-active');
		});
	});

});