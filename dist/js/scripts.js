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
   	trigger: 'click',
   	maxWidth: 200,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8g0JjQt9C80LXQvdC10L3QuNC1INGG0LLQtdGC0LAg0L/RgNC4INCy0YvQsdC+0YDQtSDQsdCw0LvQu9C+0LIg0LIg0LzQvtC00LDQu9C60LVcclxuXHQkKFwiLmV4cGVydGlzZS1tb2RhbF9yYWRpbyBsYWJlbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ3NlbGVjdCcpLFxyXG5cdFx0XHRcdGFsbExhYmVsID0gJHRoaXMuc2libGluZ3MoJ2xhYmVsJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygncmVkJyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW4nKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdGFsbExhYmVsLnJlbW92ZUNsYXNzKCdyZWRMaWdodCcpO1xyXG5cdFx0YWxsTGFiZWwucmVtb3ZlQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRhbGxMYWJlbC5yZW1vdmVDbGFzcygnZ3JlZW5MaWdodCcpO1xyXG5cdFx0aWYgKGRhdGEgPD0gMykge1xyXG5cdFx0XHRhbGxMYWJlbC5hZGRDbGFzcygncmVkTGlnaHQnKTtcclxuXHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ3JlZCcpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGF0YSA+IDMgJiYgZGF0YSA8PTcpIHtcclxuXHRcdFx0YWxsTGFiZWwuYWRkQ2xhc3MoJ3llbGxvd0xpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCd5ZWxsb3cnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRhdGEgPiA3KSB7XHJcblx0XHRcdGFsbExhYmVsLmFkZENsYXNzKCdncmVlbkxpZ2h0Jyk7XHJcblx0XHRcdCR0aGlzLmFkZENsYXNzKCdncmVlbicpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBUb29sdGlwc3RlciDQktGB0L/Qu9GL0LLQsNGO0YnQsNGPINC/0L7QtNGB0LrQsNC30LrQsFxyXG5cdCQoJy5leHBlcnRpc2UtbW9kYWxfcXVlc3Rpb24nKS50b29sdGlwc3Rlcih7XHJcblx0XHR0aGVtZSA6ICd0b29sdGlwc3Rlci1ub2lyJyxcclxuXHRcdGRlbGF5VG91Y2g6IDAsXHJcblx0fSk7XHJcblx0dmFyIGV4cGVydFRvb2x0aXAgPSAkKCcuZXhwZXJ0LWRlbGV0ZV9pdGVtJykudG9vbHRpcHN0ZXIoe1xyXG5cdFx0dGhlbWU6ICd0b29sdGlwc3Rlci1saWdodCcsXHJcbiAgIFx0dHJpZ2dlcjogJ2NsaWNrJyxcclxuICAgXHRtYXhXaWR0aDogMjAwLFxyXG4gICBcdGNvbnRlbnRBc0hUTUw6IHRydWUsXHJcbiAgIFx0aW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgIFx0c2lkZTogIFsncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdsZWZ0J10sXHJcbiAgIFx0ekluZGV4OiA5NyxcclxuXHR9KTtcclxuXHJcblx0Ly8g0J7RgtC60LvRjtGH0LXQvdC40LUg0L/QvtC00YHQutCw0LfQutC4INC90LAg0LzQvtCx0LjQu9GM0L3Ri9GFXHJcblx0ZnVuY3Rpb24gdG9vbHRpcERpc2FibGUoKSB7XHJcblx0XHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDkwMHB4KScpLm1hdGNoZXMpIHtcclxuXHRcdFx0ZXhwZXJ0VG9vbHRpcC50b29sdGlwc3RlcignZGlzYWJsZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDkwMXB4KScpLm1hdGNoZXMpIHtcclxuXHRcdFx0ZXhwZXJ0VG9vbHRpcC50b29sdGlwc3RlcignZW5hYmxlJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dG9vbHRpcERpc2FibGUoKTtcclxuXHJcblx0Ly8g0JDQutC60L7RgNC00LXQvtC9XHJcblx0JCgnLnJldmlldy1hY2NvcmRlb25fdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHRyaWdnZXIgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGFsbFRyaWdnZXIgPSB0cmlnZ2VyLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5yZXZpZXctYWNjb3JkZW9uX3RyaWdnZXInKSxcclxuXHRcdFx0XHRjb250ZW50ID0gdHJpZ2dlci5zaWJsaW5ncygnLnJldmlldy1hY2NvcmRlb25fY29udGVudCcpLFxyXG5cdFx0XHRcdGFsbENvbnRlbnQgPSB0cmlnZ2VyLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5yZXZpZXctYWNjb3JkZW9uX2NvbnRlbnQnKSxcclxuXHRcdFx0XHR0aW1lID0gMzAwO1xyXG5cdFx0aWYgKCFjb250ZW50Lmhhc0NsYXNzKCdvcGVuJykpIHtcclxuXHRcdFx0YWxsQ29udGVudC5zdG9wKCkuc2xpZGVVcCh0aW1lKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHRjb250ZW50LnN0b3AoKS5zbGlkZURvd24odGltZSkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0YWxsVHJpZ2dlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdHRyaWdnZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnRlbnQuc3RvcCgpLnNsaWRlVXAodGltZSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdFx0dHJpZ2dlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIEF1dG9zaXplINCY0LfQvNC10L3QtdC90LjQtSDQstGL0YHQvtGC0Ysg0YLQtdC60YHRgtC+0LLQvtCz0L4g0L/QvtC70Y8g0L/RgNC4INC00L7QsdCw0LLQu9C10L3QuNC4INC60L7QvdGC0LXQvdGC0LBcclxuXHRhdXRvc2l6ZSgkKCd0ZXh0YXJlYScpKTtcclxuXHJcblx0Ly8g0J/QvtC/0LDQvyBcItC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INGB0L3Rj9GC0LjRjyDRjdC60YHQv9C10YDRgtCwXCJcclxuXHQkKCcubW9kYWwtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoJ21vZGFsJyksXHJcblx0XHRcdFx0bW9kYWxPdmVyID0gJCgnLm1vZGFsX292ZXInKSxcclxuXHRcdFx0XHRtb2RhbCA9ICQoJyNtb2RhbC0nICsgZGF0YSk7XHJcblx0XHRtb2RhbC50b2dnbGVDbGFzcygnb3BlbicpXHJcblx0XHQubmV4dCgnLm1vZGFsX292ZXInKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0JCgnLm1vZGFsX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1vZGFsLnJlbW92ZUNsYXNzKCdvcGVuJyksXHJcblx0XHRcdG1vZGFsT3Zlci5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0XHRtb2RhbE92ZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1vZGFsLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHRcdG1vZGFsT3Zlci5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHR0b29sdGlwRGlzYWJsZSgpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyDQnNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cclxuXHQkKCcubWVudUJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBtZW51ID0gJCh0aGlzKS5zaWJsaW5ncygnI21lbnUnKTtcclxuXHRcdC8vIHZhciBvdmVyID0gJCh0aGlzKS5zaWJsaW5ncygnLm1lbnVfb3ZlcicpO1xyXG5cdFx0dmFyIGJ0biA9ICQodGhpcyk7XHJcblx0XHRtZW51LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQvLyBidG4udG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0Ly8gb3Zlci5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdC8vIFx0bWVudS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0Ly8gXHRidG4ucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHRtZW51LmZpbmQoJ2EnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0bWVudS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0XHQvLyBidG4ucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KTsiXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
