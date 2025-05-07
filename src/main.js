import { DOM } from './js/navigation';
import * as HANDLERS from './js/handlers';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const mediaQuery = window.matchMedia('(min-width: 1440px)');
const swiper = new Swiper('.swiper', {
	modules: [Pagination],
	allowTouchMove: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}">0${index + 1}</span>`;
		},
	},
});

DOM.mobileMenuToggleButtons.forEach(button => button.addEventListener('click', HANDLERS.mobileMenuHandler));
DOM.toggleModalButtons.forEach(button => button.addEventListener('click', HANDLERS.modalWindowHandler));
DOM.navigationLinks.forEach(link => link.addEventListener('click', HANDLERS.mobileMenuHandler));
mediaQuery.addEventListener('change', HANDLERS.iframeHandler);

iframeHandler(mediaQuery);
