import * as React from 'react';
import Card from '~components/Card';
import { ICompany } from '~services/companies/types';

const list: React.SFC<{ companies: ICompany[] }> = ({ companies }) => (
  <div>
    <h1>Construction Companies</h1>
    {!companies.length && <p>Unfortunately we can't find this company</p>}
    {companies.map(company => <Card key={company.id} {...company} />)}
  </div>
);

export default list;
