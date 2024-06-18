function navigateTo(page) {
    window.location.href = page;
}

function fetchPage(url) {
    return fetch(url).then(response => response.text());
}

function parseHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc;
}

function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const pages = ['escola.html', 'saudacoes.html', 'numeros.html', 'lojas.html', 'hospital.html', 'alfabeto.html']; // Adicione aqui as páginas que deseja pesquisar

    if (searchInput === '') {
        searchResults.textContent = 'Nenhum ID correspondente encontrado';
        return;
    }

    let promises = pages.map(page => fetchPage(page));

    Promise.all(promises).then(responses => {
        responses.forEach(response => {
            const doc = parseHTML(response);
            const gridItems = doc.getElementsByClassName('grid-item-id');

            Array.from(gridItems).forEach(item => {
                const itemId = item.id.toLowerCase();

                if (itemId.includes(searchInput)) {
                    searchResults.appendChild(item.cloneNode(true));
                }
            });
        });

        if (!searchResults.hasChildNodes()) {
            searchResults.textContent = 'Nenhum ID correspondente encontrado';
        }
    }).catch(error => {
        console.error('Error fetching pages:', error);
    });
}
