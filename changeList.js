const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const listBelanja = document.getElementById("listBelanja");

function addList(){
    // Prompt add list
    const newList = prompt('Tambah List Belanja Harian: ');
    // Buat textNode dari newList
    const textNode = document.createTextNode(newList);
    // Buat list item (li) yang berisi text node
    const listItem = document.createElement('li');

    // Append text node ke listItem
    listItem.appendChild(textNode);
    // Append list node ke ul
    listBelanja.appendChild(listItem);
}

function removeList(){
    const lastItem = listBelanja.lastElementChild

    confirm('Apakah Anda yakin ingin menghapus item terakhir?') 
    // Untuk menghapus list terakhir 
    && listBelanja.removeChild(lastItem);

}

addButton.addEventListener("click", addList);
removeButton.addEventListener("click", removeList);