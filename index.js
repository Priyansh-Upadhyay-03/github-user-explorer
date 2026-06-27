async function github() {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const parent = document.getElementById("first");

    for (let user of data) {
      // Create a new div element for each user
      const element = document.createElement("div");
      element.className = "user";

      // Create an image element for the user's avatar
      const image = document.createElement("img");
      image.src = user.avatar_url;
      // Add a click event listener to the image to navigate to details.html with the username as a query parameter
      image.addEventListener("click", () => {
        window.location.href = `details.html?username=${user.login}`;
      });

      // Create an h2 element for the user's login name
      const userName = document.createElement("h2");
      userName.textContent = user.login;

      // Append the image and userName to the element
      const anchor = document.createElement("a");
      anchor.href = user.html_url;
      anchor.textContent = "Visit Profile";

      element.append(image, userName, anchor);
      parent.append(element);
    }
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
  }
}
github();
