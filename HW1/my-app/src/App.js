import React from 'react'; // на будущее
import Message from './Message';

function App() {
  return (
    <div className="App">
            <h1>Это сообщение из App</h1>
            <Message text="Это сообщение от компонента Message." />
        </div>
  );
}

export default App;
