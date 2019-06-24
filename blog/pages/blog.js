import axios from 'axios';

const Blog = ({response}) => {
    return (
  <div>
    <h3>This is our blog</h3>
      <div>{response}</div>
    <a href='/'>Go Back</a>
  </div>
)};

Blog.getInitialProps = async function({query}) {
    const token = query.id;
    const response = await axios.get('https://gorest.co.in/public-api/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return {response: response.data.result[0].address};
};

export default Blog;
