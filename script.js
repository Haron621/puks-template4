document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionBtn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        // Переключаем отображение сообщения при клике
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            button.textContent = 'Скрыть';
        } else {
            message.classList.add('hidden');
            button.textContent = 'Нажми на меня';
        }
    });
});