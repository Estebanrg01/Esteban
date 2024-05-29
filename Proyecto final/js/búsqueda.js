const inputSearch = document.getElementById('searchInput');
const container = document.querySelector('.container');

inputSearch.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const paragraphs = container.querySelectorAll('p');
    const listItems = container.querySelectorAll('li');

    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent.trim().toLowerCase();
        const index = text.indexOf(searchTerm);
        if (index !== -1) {
            const newText = `${text.substring(0, index)}<span class="highlight">${text.substring(index, index + searchTerm.length)}</span>${text.substring(index + searchTerm.length)}`;
            paragraph.innerHTML = newText;
        } else {
            paragraph.innerHTML = text;
        }
    });

    listItems.forEach(listItem => {
        const text = listItem.textContent.trim().toLowerCase();
        const index = text.indexOf(searchTerm);
        if (index !== -1) {
            const newText = `${text.substring(0, index)}<span class="highlight">${text.substring(index, index + searchTerm.length)}</span>${text.substring(index + searchTerm.length)}`;
            listItem.innerHTML = newText;
        } else {
            listItem.innerHTML = text;
        }
    });
});
