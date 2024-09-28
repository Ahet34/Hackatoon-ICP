import { useState } from 'react';
import { hackathon_backend } from 'declarations/hackathon_backend';
function App() {
    const [greeting, setGreeting] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        hackathon_backend.greet(name).then((greeting) => {
            setGreeting(greeting);
        });
        return false;
    }
    return (<main>
      <img src="/logo2.svg" alt="DFINITY logo"/>
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Ingresa tu nombre : &nbsp;</label>
        <input id="name" alt="Name" type="text"/>
        <button type="submit">HOLAAAAA Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>);
}
export default App;
