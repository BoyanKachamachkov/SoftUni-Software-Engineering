const list = document.getElementById('commits');


async function loadCommits() {
  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;
  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw 'Error';
    }

    const data = await response.json();
    // to do

  } catch (error) {
    /* •	In case of an error, add a single list item (<li>) with text in the following format:
    "Error: <error.status> (Not Found)"
     */
    

  }

}