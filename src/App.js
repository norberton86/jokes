import { useState, useEffect } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(null);
  

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async() => {
    try {
      setJoke(null);
      setLoading(true);
      const result = await fetch('https://karljoke.herokuapp.com/jokes/random', {
        headers: {
          'Accept': 'application/json'
        }
      });
      setJoke(await result.json());
    } catch (e) {
      setJoke({error: 'There was a problem loading your joke'})
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="App">
      <Header operation={getJoke}></Header>
      <div className="Divider"></div>
      {loading && <h4>Loading your joke</h4>}
      {joke?.error && <h4 className='error'>{joke.error}</h4>}
      {joke?.setup && joke?.punchline && <Content data={joke}></Content>}
    </div>
  );
}

export default App;
