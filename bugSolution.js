```javascript
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleNavigation = () => {
    if (isMounted) {
      navigate('/about');
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigation}>Go to About</button>
    </div>
  );
}

export default Home;
```