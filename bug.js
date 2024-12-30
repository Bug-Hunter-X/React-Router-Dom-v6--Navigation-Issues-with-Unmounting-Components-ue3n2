```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => {/* ... some action causing navigation ... */}}>Go to About</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default App;
```