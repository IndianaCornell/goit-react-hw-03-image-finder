import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';

export class App extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
