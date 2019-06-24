import axios from 'axios';

export default () => {
    const loginFn = () => {
    sessionStorage.setItem('token', '<token>');
    const form = document.createElement('Form');
    const input = document.createElement('input');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = '/blog';
    form.enctype = 'multipart/form-data';
    input.type = 'hidden';
    input.name = 'authToken';
    input.value = '<token>';
    form.appendChild(input);
    form.submit();
    };
    return (
  <div>
    <h2>The Company</h2>
    <button onClick={loginFn}>CLICK ME!</button>
  </div>
)}
