import { Route } from "react-router";
import Navi from "./component/Navi";
import { Switch } from 'react-router-dom';
import Notfound from "./component/Notfound";
import Anasayfa from "./component/Anasayfa";
import Profilgüncelle from "./component/Profilgüncelle";
import Register from "./component/Register";


function App() {
  
  
  

  return (
    <div>
      <Navi></Navi>
      <Switch>
        
        <Route exact path="/" component={Anasayfa}></Route>
        <Route exact path="/Profilgüncelle" component={Profilgüncelle}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route component={Notfound}></Route>
      </Switch>


    </div>
  );
}

export default App;
