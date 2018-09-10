import * as React from 'react';


class App extends React.PureComponent<{}, {}> {

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
  
}


export default App;