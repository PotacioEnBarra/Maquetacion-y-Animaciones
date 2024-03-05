import '../styles/styles.scss';

const toggleModal = (): void => {
	MODAL.classList.toggle('hidden');
	MODAL.classList.toggle('visible');
};

const $ = (selector: string): Element | null =>
	document.querySelector(selector);
const $$ = (selector: string): NodeListOf<Element> =>
	document.querySelectorAll(selector);

const MODAL = $('#modal') as HTMLDivElement;
const BUTTONS_HEROES = $$('.button-hero') as NodeListOf<HTMLButtonElement>;
const BUTTON_CLOSE = $('#button-close') as HTMLButtonElement;
const BUTTONS_HEROES_ARRAY = Array.from(BUTTONS_HEROES);

for (const BUTTON of BUTTONS_HEROES_ARRAY) {
	BUTTON.addEventListener('click', toggleModal);
}

BUTTON_CLOSE.addEventListener('click', toggleModal);
