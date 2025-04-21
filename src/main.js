import { DOM } from './js/navigation';
import { mobileMenuHandler, modalWindowHandler } from './js/handlers';

DOM.mobileMenuToggleButtons.forEach(button => button.addEventListener('click', mobileMenuHandler));
DOM.toggleModalButtons.forEach(button => button.addEventListener('click', modalWindowHandler));
DOM.navigationLinks.forEach(link => link.addEventListener('click', mobileMenuHandler));
