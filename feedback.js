const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');

// Log initial selection
console.log('Initial selection:', { container, emoji, textarea, btn });

emoji.addEventListener('click', (e) => {
    console.log('Emoji clicked:', e.target);

    if (e.target.className.includes('emoji')) {
        console.log('Click ignored: clicked on emoji container itself.');
        return;
    }

    console.log('Activating textarea and button.');
    textarea.classList.add('textarea--active');
    btn.classList.add('btn--active');
});

container.addEventListener('mouseleave', () => {
    console.log('Container mouseleave event triggered.');

    console.log('Deactivating textarea and button.');
    textarea.classList.remove('textarea--active');
    btn.classList.remove('btn--active');
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Send button clicked.');
    alert("Thank you for your feedback");
});
