import { DOM } from './navigation';

export function mobileMenuHandler() {
	DOM.mobileMenu.classList.toggle('is-open');
	DOM.mobileMenuToggleButtons.forEach(button => button.classList.toggle('hidden'));
}

export function modalWindowHandler(event) {
	if (event.currentTarget.hasAttribute('data-show-payment')) {
		DOM.modalAvailableWindow.classList.toggle('is-open');
		DOM.modalPaymentWindow.classList.toggle('is-open');
		return;
	}
	if (event.currentTarget.hasAttribute('data-show-call')) {
		DOM.modalPaymentWindow.classList.toggle('is-open');
		DOM.modalWindow.classList.toggle('is-open');
		return;
	}
	if (event.currentTarget.hasAttribute('data-modal-data')) {
		DOM.modalWindow.classList.toggle('is-open');
	}
	if (event.currentTarget.hasAttribute('data-available-modal')) {
		DOM.modalAvailableWindow.classList.toggle('is-open');
	}
	if (event.currentTarget.hasAttribute('data-payment-modal')) {
		DOM.modalPaymentWindow.classList.toggle('is-open');
	}
	document.body.classList.toggle('no-scroll');
}

export function iframeHandler(event) {
	if (event.matches) {
		const title = document.querySelector('#reviews .section-main-title');
		const slides = document.querySelectorAll('.swiper-slide');
		slides.forEach(slide => {
			const newTitle = title.cloneNode(true);
			slide.prepend(newTitle);
		});
		title.remove();
		return;
	}
	const newTitles = document.querySelectorAll('#reviews .section-main-title');
	const title = newTitles[0].cloneNode(true);
	document.querySelector('#reviews .container').prepend(title);
	newTitles.forEach(titleForRemove => titleForRemove.remove());
}

export function radioButtonHandler() {
	DOM.changebleImage.forEach(picture => picture.classList.toggle('visually-hidden'));
}

export function modalSelectHandler(event) {
	if (!this.value) {
		this.classList.add('disabled-select');
		return;
	}
	this.classList.remove('disabled-select');
}
