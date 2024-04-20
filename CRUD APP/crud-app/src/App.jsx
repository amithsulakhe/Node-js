import UserData from "./components/UserData";
import { Provider } from "react-redux";
import appstore from "./store/store";
function App() {
  return (
    <Provider store={appstore}>
      <div>
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
