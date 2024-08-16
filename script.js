function addSpace(level) {
    return ' '.repeat(level);
}

function formatLog() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    let level = 0;
    let formatted = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char === '{') {
            level += 2;
            formatted += char + '\n' + addSpace(level);
        } else if (char === ',') {
            formatted += char + '\n' + addSpace(level);
        } else if (char === '}') {
            level -= 2;
            formatted += '\n' + addSpace(level) + char;
        } else {
            formatted += char;
        }
    }

    output.textContent = formatted;
}

function copyToClipboard() {
    const output = document.getElementById('output').value;
    navigator.clipboard.writeText(output);
}

document.getElementById('formatButton').addEventListener('click', formatLog);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);

    themeButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(newTheme);

        localStorage.setItem('theme', newTheme);
    });
});

