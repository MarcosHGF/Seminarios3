function navigateTo(page) {
    window.location.href = page;
}

function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gridItems = document.getElementsByClassName('grid-item-id');

    for (let i = 0; i < gridItems.length; i++) {
        const item = gridItems[i];
        const itemId = item.id.toLowerCase();

        // Usando if para verificar se o itemId contém o valor de searchInput
        if (itemId.includes(searchInput)) {
            item.style.display = 'block'; // Exibir o item
        } else {
            item.style.display = 'none'; // Ocultar o item
        }
    }
}
