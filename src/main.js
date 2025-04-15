import { DOM } from './js/navigation';
import { mobileMenuHandler } from './js/handlers';

DOM.mobileMenuToggleButtons.forEach(button => button.addEventListener('click', mobileMenuHandler));
