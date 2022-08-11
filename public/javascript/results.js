async function checkboxHandler(event) {
    event.preventDefault();
  
    //'input[name="post-title"]'
    const habit = document.querySelector('column title').value;
    const date = document.querySelector('row title').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);