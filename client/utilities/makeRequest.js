
module.exports = async function(url) {
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}