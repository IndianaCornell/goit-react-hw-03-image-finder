import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { findImages } from 'api';

export class App extends Component {
  state = {
    images: [],
    query: ``,
    page: 1,
    loading: false,
  };

  changeQuerry = newQuery => {
    this.setState({ query: `${Date.now()}/${newQuery}`, images: [], page: 1 });
  };

  async componentDidUpdate(_, prevstate) {
    const { query: prevQuery, page: prevPage } = prevstate;
    const { query: nextQuery, page: nextPage } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.loadResults();
    }
  }

  loadResults = async () => {
    try {
      this.setState({ loading: true });
      const queryResult = await findImages(this.state.query, this.state.page);

      if (this.state.page === 1 && queryResult.length !== 0) {
        toast.success(`Here we go`, { autoClose: 1000 });
      }

      if (queryResult.length === 0) {
        this.setState({
          loading: false,
        });
        toast.error(`Sorry, there are no images for your request :C`);
        return;
      }

      this.setState(prevstate => ({
        images:
          this.state.page > 1
            ? [...prevstate.images, ...queryResult]
            : queryResult,
        loading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handelLoadMore = () => {
    this.setState(prevstate => ({ page: prevstate.page + 1 }));
  };

  render() {
    return (
      <Layout>
        <SearchBar changeQuerry={this.changeQuerry} />
        {this.state.loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {this.state.images.length > 0 && (
          <ImageGallery imagesArr={this.state.images} />
        )}
        {this.state.images.length !== 0 && this.state.images.length >= 16 && (
          <Loader nextPage={this.handelLoadMore} />
        )}
        <ToastContainer />
        <GlobalStyle />
      </Layout>
    );
  }
}
