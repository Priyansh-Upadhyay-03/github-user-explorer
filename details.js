// URL se username nikalna

const params = new URLSearchParams(window.location.search);

const username = params.get("username");

console.log(username);

async function getUser() {
  const response = await fetch(`https://api.github.com/users/${username}`);

  const user = await response.json();

  const container = document.getElementById("container");

  container.innerHTML = `
        <img src="${user.avatar_url}">
        <h1>${user.login}</h1>

        <p><b>Name:</b> ${user.name}</p>

        <p><b>Bio:</b> ${user.bio}</p>

        <p><b>Followers:</b> ${user.followers}</p>

        <p><b>Following:</b> ${user.following}</p>

        <p><b>Repositories:</b> ${user.public_repos}</p>

        <p><b>Location:</b> ${user.location}</p>

        <a href="${user.html_url}" target="_blank">
            Visit GitHub
        </a>
    `;
}

getUser();
