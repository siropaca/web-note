document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('note');
    const STORAGE_KEY = 'note_content';

    if (sessionStorage.getItem(STORAGE_KEY)) {
        textarea.value = sessionStorage.getItem(STORAGE_KEY);
    }

    textarea.addEventListener('input', () => {
        sessionStorage.setItem(STORAGE_KEY, textarea.value);
    });
});
