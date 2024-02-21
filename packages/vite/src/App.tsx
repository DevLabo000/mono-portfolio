import { useGetInventory } from 'libs/api/client/store/store';
import './App.css';

function App() {
  const store = useGetInventory();
  console.log('store', store.data?.data);
  return (
    <>
      <div>test</div>
    </>
  );
}

export default App;
