// Função para mostrar ou ocultar informações adicionais sobre os ecopontos
function toggleInfo(button) {
    const moreInfo = button.nextElementSibling;
    const isVisible = moreInfo.style.display === 'block';

    if (isVisible) {
        moreInfo.style.display = 'none';
        button.innerText = 'Mais informações';
    } else {
        moreInfo.style.display = 'block';
        button.innerText = 'Leia menos';
    }
}
