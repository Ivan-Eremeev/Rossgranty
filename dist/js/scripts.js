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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8g0JjQt9C80LXQvdC10L3QuNC1INGG0LLQtdGC0LAg0L/RgNC4INCy0YvQsdC+0YDQtSDQsdCw0LvQu9C+0LIg0LIg0LzQvtC00LDQu9C60LVcclxuXHQkKFwiLmV4cGVydGlzZS1tb2RhbF9yYWRpbyBsYWJlbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ3NlbGVjdCcpLFxyXG5cdFx0XHRcdGFsbExhYmVsID0gJHRoaXMuc2libGluZ3MoJ2xhYmVsJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygncmVkJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW4nKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCdyZWRMaWdodCcpO1xyXG5cdFx0YWxsTGFiZWwucmVtb3ZlQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW5MaWdodCcpO1xyXG5cdFx0aWYgKGRhdGEgPD0gMykge1xyXG5cdFx0XHRhbGxMYWJlbC5hZGRDbGFzcygncmVkTGlnaHQnKTtcclxuXHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ3JlZCcpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGF0YSA+IDMgJiYgZGF0YSA8PTcpIHtcclxuXHRcdFx0YWxsTGFiZWwuYWRkQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRhdGEgPiA3KSB7XHJcblx0XHRcdGFsbExhYmVsLmFkZENsYXNzKCdncmVlbkxpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCdncmVlbicpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBUb29sdGlwc3RlciDQktGB0L/Qu9GL0LLQsNGO0YnQsNGPINC/0L7QtNGB0LrQsNC30LrQsFxyXG5cdCQoJy5leHBlcnRpc2UtbW9kYWxfcXVlc3Rpb24nKS50b29sdGlwc3Rlcih7XHJcblx0XHR0aGVtZSA6ICd0b29sdGlwc3Rlci1ub2lyJyxcclxuXHRcdGRlbGF5VG91Y2g6IDAsXHJcblx0fSk7XHJcblx0dmFyIGV4cGVydFRvb2x0aXAgPSAkKCcuZXhwZXJ0LWRlbGV0ZV9pdGVtJykudG9vbHRpcHN0ZXIoe1xyXG5cdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1saWdodCcsXHJcbiAgIFx0dHJpZ2dlcjogJ2hvdmVyJyxcclxuICAgXHRtYXhXaWR0aDogMjAwLFxyXG4gICBcdG1pbldpZHRoOiAyMDAsXHJcbiAgIFx0Y29udGVudEFzSFRNTDogdHJ1ZSxcclxuICAgXHRpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgXHRzaWRlOiAgWydyaWdodCcsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnXSxcclxuICAgXHR6SW5kZXg6IDk3LFxyXG5cdH0pO1xyXG5cclxuXHQvLyDQntGC0LrQu9GO0YfQtdC90LjQtSDQv9C+0LTRgdC60LDQt9C60Lgg0L3QsCDQvNC+0LHQuNC70YzQvdGL0YVcclxuXHRmdW5jdGlvbiB0b29sdGlwRGlzYWJsZSgpIHtcclxuXHRcdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTAwcHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHRleHBlcnRUb29sdGlwLnRvb2x0aXBzdGVyKCdkaXNhYmxlJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTAxcHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHRleHBlcnRUb29sdGlwLnRvb2x0aXBzdGVyKCdlbmFibGUnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0b29sdGlwRGlzYWJsZSgpO1xyXG5cclxuXHQvLyDQkNC60LrQvtGA0LTQtdC+0L1cclxuXHQkKCcucmV2aWV3LWFjY29yZGVvbl90cmlnZ2VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdHJpZ2dlciA9ICQodGhpcyksXHJcblx0XHRcdFx0YWxsVHJpZ2dlciA9IHRyaWdnZXIucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnJldmlldy1hY2NvcmRlb25fdHJpZ2dlcicpLFxyXG5cdFx0XHRcdGNvbnRlbnQgPSB0cmlnZ2VyLnNpYmxpbmdzKCcucmV2aWV3LWFjY29yZGVvbl9jb250ZW50JyksXHJcblx0XHRcdFx0YWxsQ29udGVudCA9IHRyaWdnZXIucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnJldmlldy1hY2NvcmRlb25fY29udGVudCcpLFxyXG5cdFx0XHRcdHRpbWUgPSAzMDA7XHJcblx0XHRpZiAoIWNvbnRlbnQuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG5cdFx0XHRhbGxDb250ZW50LnN0b3AoKS5zbGlkZVVwKHRpbWUpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdGNvbnRlbnQuc3RvcCgpLnNsaWRlRG93bih0aW1lKS5hZGRDbGFzcygnb3BlbicpO1xyXG5cdFx0XHRhbGxUcmlnZ2VyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0dHJpZ2dlci5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29udGVudC5zdG9wKCkuc2xpZGVVcCh0aW1lKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHR0cmlnZ2VyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gQXV0b3NpemUg0JjQt9C80LXQvdC10L3QuNC1INCy0YvRgdC+0YLRiyDRgtC10LrRgdGC0L7QstC+0LPQviDQv9C+0LvRjyDQv9GA0Lgg0LTQvtCx0LDQstC70LXQvdC40Lgg0LrQvtC90YLQtdC90YLQsFxyXG5cdGF1dG9zaXplKCQoJ3RleHRhcmVhJykpO1xyXG5cclxuXHQvLyDQn9C+0L/QsNC/IFwi0L/QvtC00YLQstC10YDQttC00LXQvdC40LUg0YHQvdGP0YLQuNGPINGN0LrRgdC/0LXRgNGC0LBcIlxyXG5cdCQoJy5tb2RhbC10cmlnZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgnbW9kYWwnKSxcclxuXHRcdFx0XHRtb2RhbE92ZXIgPSAkKCcubW9kYWxfb3ZlcicpLFxyXG5cdFx0XHRcdG1vZGFsID0gJCgnI21vZGFsLScgKyBkYXRhKTtcclxuXHRcdG1vZGFsLnRvZ2dsZUNsYXNzKCdvcGVuJylcclxuXHRcdC5uZXh0KCcubW9kYWxfb3ZlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQkKCcubW9kYWxfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bW9kYWwucmVtb3ZlQ2xhc3MoJ29wZW4nKSxcclxuXHRcdFx0bW9kYWxPdmVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHR9KTtcclxuXHRcdG1vZGFsT3Zlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bW9kYWwucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0bW9kYWxPdmVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHRvb2x0aXBEaXNhYmxlKCk7XHJcblx0fSk7XHJcblxyXG5cdC8vINCc0L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5cdCQoJy5tZW51QnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIG1lbnUgPSAkKHRoaXMpLnNpYmxpbmdzKCcjbWVudScpO1xyXG5cdFx0Ly8gdmFyIG92ZXIgPSAkKHRoaXMpLnNpYmxpbmdzKCcubWVudV9vdmVyJyk7XHJcblx0XHR2YXIgYnRuID0gJCh0aGlzKTtcclxuXHRcdG1lbnUudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdC8vIGJ0bi50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblx0XHQvLyBvdmVyLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gXHRtZW51LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQvLyBcdGJ0bi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblx0XHQvLyB9KTtcclxuXHRcdG1lbnUuZmluZCgnYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRtZW51LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdC8vIGJ0bi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0cy5qcyJ9
