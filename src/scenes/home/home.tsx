import * as React from 'react';
import Search from '~components/search';
import Filter from '~components/filter';

interface IHomeProps { }
interface IHomeState { }
class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <div>
        <Search />
        <Filter />
      </div>
    )
  }
}

export default Home
