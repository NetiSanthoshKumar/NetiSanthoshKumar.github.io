document.getElementById("submitButton").onclick = async function () {
      const email = document.getElementById("inputField").value.trim();
      const result = document.getElementById("result");
      result.textContent = "";

      if (!email) {
        alert("Please enter an email id.");
        return;
      }

      try {
        // Step 1: Get users and find matching email
        const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await userRes.json();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user) {
          result.textContent = "No user found with this email.";
          return;
        }

        // Step 2: Get post count for that user
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postRes.json();

        // Display name and number of posts
        result.innerHTML = `
          <p>Name: <strong>${user.name}</strong></p>
          <p>Total Posts: <strong>${posts.length}</strong></p>
        `;
      } catch (error) {
        result.textContent = "Error fetching data.";
        console.error(error);
      }
    };