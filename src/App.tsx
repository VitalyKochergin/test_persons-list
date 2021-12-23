import React, { ReactElement } from 'react';

import PersonContainer from "./containers/personContainer/personContainer";
import 'antd/dist/antd.css';

const App = (): ReactElement => {
  return (
    <div className="App">
      <PersonContainer />
    </div>
  );
}

export default App;
