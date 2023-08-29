import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    query: '',
  };

  changeQuerry = newQurry => {
    this.setState({ query: newQurry, images: [] });
  };

  componentDidUpdatem(prevprops, prevstate) {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Layout>
        <SearchBar changeQuerry={this.changeQuerry} />
        <ImageGallery />
        <Loader />
        <GlobalStyle />
      </Layout>
    );
  }
}
