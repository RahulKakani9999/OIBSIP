window.addEventListener('load', () => {
	const form = document.querySelector("#tf");
	const input = document.querySelector("#ti");
	const le = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const tk = input.value;

		const te = document.createElement('div');
		te.classList.add('task');

		const tce = document.createElement('div');
		tce.classList.add('content');

		te.appendChild(tce);

		const tie = document.createElement('input');
		tie.classList.add('text');
		tie.type = 'text';
		tie.value = tk;
		tie.setAttribute('readonly', 'readonly');

		tce.appendChild(tie);

		const tae = document.createElement('div');
		tae.classList.add('actions');
		
		const taee = document.createElement('button');
		taee.classList.add('edit');
		taee.innerText = 'Edit';

		const tade = document.createElement('button');
		tade.classList.add('delete');
		tade.innerText = 'Delete';

		tae.appendChild(taee);
		tae.appendChild(tade);

		te.appendChild(tae);

		le.appendChild(te);

		input.value = '';

		taee.addEventListener('click', (e) => {
			if (taee.innerText.toLowerCase() == "edit") {
				taee.innerText = "Save";
				tie.removeAttribute("readonly");
				tie.focus();
			} else {
				taee.innerText = "Edit";
				tie.setAttribute("readonly", "readonly");
			}
		});

		tade.addEventListener('click', (e) => {
			le.removeChild(te);
		});
	});
});
