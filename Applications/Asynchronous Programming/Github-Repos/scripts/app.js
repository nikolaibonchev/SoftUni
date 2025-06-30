function loadRepos() {
	let user = document.querySelector('#username').value;

	let url = `https://api.github.com/users/${user}/repos`;
	let userRepos = document.querySelector('#repos');
	userRepos.innerHTML = '';

	fetch(url)
		.then(res => res.json())
		.then(data => {
			data.forEach(element => {
				let createLI = document.createElement('li');
				let creatA = document.createElement('a');

				creatA.textContent = element.full_name;
				creatA.setAttribute('href', element.html_url);
				createLI.appendChild(creatA);
				userRepos.appendChild(createLI);
			});
		})
		.catch(err => {console.log(err)
		});
}

document.querySelector('#repos').innerHTML = '';