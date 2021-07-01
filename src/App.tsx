import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { CreateRoom } from './pages/CreateRoom';
import { OwnerRoom } from './pages/OwnerRoom';
import { UserRoom } from './pages/UserRoom';

import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/createRoom" component={CreateRoom} />
        <Route path="/rooms/:id" component={UserRoom} />
        <Route path="/owner/rooms/:id" component={OwnerRoom} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
