import * as React from 'react';

interface IFilterProps {
  filters: [];
  onFilter: (e, filter) => void;
}

const filters: React.SFC<IFilterProps> = props => (
  <div>
    <p>Filters:</p>
    <ul>
      {props.filters.map(filter => (
        <li key={filter}>
          <label>
            <input type="checkbox" onChange={e => props.onFilter(e, filter)} />
            {filter}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default filters;
