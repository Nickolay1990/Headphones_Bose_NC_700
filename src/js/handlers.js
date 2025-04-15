import { DOM } from './navigation';

export function mobileMenuHandler() {
	DOM.miobileMenu.classList.toggle('is-open');
	DOM.mobileMenuToggleButtons.forEach(button => button.classList.toggle('hidden'));
}
