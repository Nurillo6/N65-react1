import './App.css';
import Button from './components/Button/Button';
import {ListItem} from './components/ListItem/ListItem';
import AOS from "aos"
import "aos/dist/aos.css";

function App() {
  AOS.init()
  return (
    <>
    <ListItem/>
        {/* <Button extraStyle={"border-blue-500 flex items-center  justify-center gap-5 text-blue-500 m-10"}>
          <img className='rounded-[50%]' src='https://picsum.photos/id/44/30/30'/>
          Create User  
        </Button>
        <Button extraStyle={"border-blue-500 flex items-center  justify-center gap-5 text-blue-500 m-10"}>
          Log in
        </Button> */}
    </>
  );
}

export default App;
