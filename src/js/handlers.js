import { DOM } from './navigation';

export function mobileMenuHandler() {
	DOM.miobileMenu.classList.toggle('is-open');
	DOM.mobileMenuToggleButtons.forEach(button => button.classList.toggle('hidden'));
}

export function modalWindowHandler() {
	DOM.modalWindow.classList.toggle('is-open');
}
