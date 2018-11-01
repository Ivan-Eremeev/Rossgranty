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
		theme : 'tooltipster-noir'
	});
	$('.expert-delete_item').tooltipster({
		theme : 'tooltipster-noir',
		theme: 'tooltipster-punk',
   	trigger: 'click'
	});

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

	autosize($('textarea'));

});