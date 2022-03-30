import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("username", "user@example.com");
    formdata.append("password", "password123");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      mode : "no-cors"
    };

    fetch("http://localhost:8000/login", requestOptions)
      .then(response => {console.log(response); return response.json()})
      .then(result => navigate('/'))
      .catch(error => console.log('error', error));
    }
    
  return (
    <div>
      <div class="w-full max-w-xs m-auto mt-20">
        <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-20" onSubmit = {handleSubmit}>
        <h2 className='text-center'>Login</h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
      
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        
      </div>
    </div>
    );
  }
 
export default LoginPage;