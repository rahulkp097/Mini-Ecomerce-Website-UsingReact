import HomeScreen from "./Screens/HomeScreen";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";




function App() {
  return (
    <CartProvider>

    <HomeScreen/>
    </CartProvider>
  );
}

export default App;
