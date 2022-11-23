const formEl = document.querySelector('#add-book')
formEl.addEventListener('submit', addBook)

function addBook(event) {

    //get the different input values
    const TitleInPut = document.querySelector('#title')
    const AuthorInPut = document.querySelector('#author')
    const ISBNInPut = document.querySelector('#ISBN')

    //add the input values + deletebutton to the table
    const TableData = `<tr>
                        <td>${TitleInPut.value}</td>
                        <td>${AuthorInPut.value}</td>
                        <td>${ISBNInPut.value}</td>
                        <td><a href="#" class="secondary-content">X</a></td>
                   </tr>`

    TitleInPut.value = ''
    AuthorInPut.value = ''
    ISBNInPut.value = ''
    event.preventDefault()

   document.getElementById('table').innerHTML += TableData;
}
