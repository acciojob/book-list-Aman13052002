const submitBtn = document.getElementById('submit');
const booklist = document.getElementById('book-list');


submitBtn.addEventListener('click', function(){
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	const isbn = document.getElementById('isbn').value.trim();

	const newRow = document.createElement('tr');

	newRow.innerHTML= `
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td>
	<button class='delete'>Clear</button>
	</td>	
	`

	booklist.appendChild(newRow);

	newRow.querySelector('.delete')
		.addEventListener('click', ()=> newRow.remove())

});