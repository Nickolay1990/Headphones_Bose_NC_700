import { DOM } from './navigation';

export function mobileMenuHandler() {
	DOM.mobileMenu.classList.toggle('is-open');
	DOM.mobileMenuToggleButtons.forEach(button => button.classList.toggle('hidden'));
}

export function modalWindowHandler() {
	DOM.modalWindow.classList.toggle('is-open');
}
