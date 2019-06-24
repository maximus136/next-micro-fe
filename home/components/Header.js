import axios from 'axios';

export default () => {
    const loginFn = () => {
    sessionStorage.setItem('token', 's3oMWxzTjUsm0ERSZxd3XdP0Nt-5jmV8Fgjr');
    const form = document.createElement('Form');
    const input = document.createElement('input');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = '/blog';
    form.enctype = 'multipart/form-data';
    input.type = 'hidden';
    input.name = 'authToken';
    input.value = 's3oMWxzTjUsm0ERSZxd3XdP0Nt-5jmV8Fgjr';
    form.appendChild(input);
    form.submit();
    };
    return (
  <div>
    <h2>The Company</h2>
    <button onClick={loginFn}>CLICK ME!</button>
  </div>
)}
