import * as React from 'react';
import { connect } from 'react-redux';

import { updateArray } from '~common/utils';
import * as ACTIONS from '~services/companies/actions';

import Filters from '~components/Filters';
import Layout from '~components/Layout';
import List from '~components/List';
import Search from '~components/Search';
import { ICompany } from '~services/companies/types';

import {
  getAvailableFiltersSelector,
  getFilteredBySearchList,
  getFiltersSelector,
} from '~services/companies/selectors';

interface IHomeProps {
  companies: ICompany[];
  filters: [];
  availableFilters: [];
  getCompaniesList: typeof ACTIONS.getCompaniesList;
  searchCompany: typeof ACTIONS.searchCompany;
  filterList: typeof ACTIONS.filterList;
}

class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    this.props.getCompaniesList();
  }

  onSearch = (searchText: string) => {
    this.props.searchCompany(searchText);
  }

  onFilter = (e: React.ChangeEvent<HTMLInputElement>, filterText: string) => {
    const filter = filterText.toLowerCase();
    const toggleAction = e.target.checked;

    this.props.filterList(updateArray(this.props.filters, filter, toggleAction));
  }

  render() {
    return (
      <Layout
        sidebar={
          <React.Fragment>
            <Search onSearch={this.onSearch} />
            <Filters filters={this.props.availableFilters} onFilter={this.onFilter} />
          </React.Fragment>
        }
        main={<List companies={this.props.companies} />}
      />
    );
  }
}

const mapStateToProps = state => ({
  availableFilters: getAvailableFiltersSelector(state),
  companies: getFilteredBySearchList(state),
  filters: getFiltersSelector(state),
});

export default connect(mapStateToProps, ACTIONS)(Home);
