import { useRef } from 'react';
import LandingPage from './component/LandinPage';
import Lore from './component/Lore';

const styles = {
  appContainer: `w-screen`,
};

function App() {
  const loreRef = useRef(null);
  return (
    <div className={styles.appContainer}>
      <LandingPage loreRef={loreRef} />
      <Lore loreRef={loreRef} />
    </div>
  );
}

export default App;
