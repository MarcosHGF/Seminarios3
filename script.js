function navigateTo(page) {
    window.location.href = page;
}

function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gridItems = document.getElementsByClassName('grid-item');

    for (let i = 0; i < gridItems.length; i++) {
        const itemText = gridItems[i].getElementsByTagName('span')[0].textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            gridItems[i].style.display = '';
        } else {
            gridItems[i].style.display = 'none';
        }
    }
}