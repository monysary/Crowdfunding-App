
// To do: 
// const for login = await/async (event)
// const for sign up = async, similar to the login steps
// for signup, we need name, email, password


// This is for the login

const { json } = require("sequelize");

const loginForm = async (event) => {
  event.preventDefault();


  const email = document.querySelector('#emailclass');
  const password = document.querySelector('#passwordclass');

  // if users enters both email and password, continue to fetch request (POST) .

  const return = await fetch('/api/users/login', 
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },  
  });

  // if the login was successful, redirect to profile page /profile

  if (return.ok) {
    window.location.href = '/profile';
  } else {
    console.error(return.statusText);
  }


// This is for signup form

const signupForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#signup_name');
  const email = document.querySelector('#signup_email');
  const password = document.querySelector('#signup_password');

  if ( name && email && password) {
    const return = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },     
    });

  if (return.ok) {
    window.location.href = '/profile';
  } else {
    console.error(return.statusText);
  };


  // add event listeners

  document.querySelector('.loginForm').addEventListener('submit', loginForm);

  document.querySelector('.signupForm').addEventListener('submit', signupForm);
