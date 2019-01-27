import axios from 'axios';

async function getAsJson() {
  console.log('------- getAsJson -------');
  const response = await axios.get('http://localhost:3000/json')
  const html = response.data;
  console.log('type should be object:', typeof html, html);
}

async function getAsText() {
  console.log('------- getAsText -------');
  const response = await axios.get('http://localhost:3000/json', {responseType: 'text'});
  const html = response.data;
  console.log('type should be text:', typeof html, html);
}

async function run() {
  await getAsJson();
  await getAsText();
}

run();
