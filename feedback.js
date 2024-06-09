const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');

emoji.addEventListener('click', (e) => {
    if (e.target.className.includes('emoji')) {
        return;
    }

    textarea.classList.add('textarea--active');
    btn.classList.add('btn--active');
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.classList.remove('textarea--active');
    btn.classList.remove('btn--active');
});

function sendRating() {
    // Display pop-up notification
    alert("Thank you for your feedback 😉");

    // Reset the container
    const container = document.querySelector('.container');
    const emojis = container.querySelectorAll('.emoji div');
    const textarea = container.querySelector('.textarea');

    emojis.forEach(emoji => {
        emoji.style.backgroundColor = ''; // Reset background color if any
    });
    textarea.value = ''; // Clear the textarea
}

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.scrollY > 0) {
        footer.style.bottom = '-' + window.scrollY + 'px';
    } else {
        footer.style.bottom = '0';
    }
});
