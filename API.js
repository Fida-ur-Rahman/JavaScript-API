// API (APPLICATION USER INTERFACE)
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
