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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8g0JjQt9C80LXQvdC10L3QuNC1INGG0LLQtdGC0LAg0L/RgNC4INCy0YvQsdC+0YDQtSDQsdCw0LvQu9C+0LIg0LIg0LzQvtC00LDQu9C60LVcclxuXHQkKFwiLmV4cGVydGlzZS1tb2RhbF9yYWRpbyBsYWJlbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ3NlbGVjdCcpLFxyXG5cdFx0XHRcdGFsbExhYmVsID0gJHRoaXMuc2libGluZ3MoJ2xhYmVsJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygncmVkJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW4nKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCdyZWRMaWdodCcpO1xyXG5cdFx0YWxsTGFiZWwucmVtb3ZlQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW5MaWdodCcpO1xyXG5cdFx0aWYgKGRhdGEgPD0gMykge1xyXG5cdFx0XHRhbGxMYWJlbC5hZGRDbGFzcygncmVkTGlnaHQnKTtcclxuXHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ3JlZCcpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGF0YSA+IDMgJiYgZGF0YSA8PTcpIHtcclxuXHRcdFx0YWxsTGFiZWwuYWRkQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRhdGEgPiA3KSB7XHJcblx0XHRcdGFsbExhYmVsLmFkZENsYXNzKCdncmVlbkxpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCdncmVlbicpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCcuZXhwZXJ0aXNlLW1vZGFsX3F1ZXN0aW9uJykudG9vbHRpcHN0ZXIoe1xyXG5cdFx0dGhlbWUgOiAndG9vbHRpcHN0ZXItbm9pcidcclxuXHR9KTtcclxuXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0cy5qcyJ9
