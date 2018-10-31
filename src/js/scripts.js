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

	$('.expertise-modal_question').tooltipster({
		theme : 'tooltipster-noir'
	});

});