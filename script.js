function showPage(pageId) {
    document.querySelector('.welcome').classList.add('hidden');
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function goHome() {
    document.querySelector('.welcome').classList.remove('hidden');
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
}
