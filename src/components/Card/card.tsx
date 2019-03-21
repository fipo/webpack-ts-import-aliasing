import * as React from 'react';
import { ICompany } from '~services/companies/types';
import './style.css';

const card: React.SFC<ICompany> = props => (
  <div className="card">
    <h4 className="title">{props.name}</h4>
    <div className="detailsContainer">
      <a href={props.url} title={props.name}>
        <img src="https://placekitten.com/100/100" alt={props.name}/>
      </a>
      <div className="details">
        <p><strong>Specialty:</strong> {props.specialty}</p>
        <p><strong>Revenue:</strong> {props.revenue}</p>
        <p><strong>Address:</strong> {props.city}, {props.address}</p>
        <p>
          <strong>Contacts:</strong>
          {' '}
          {props.phone}
          {' | '}
          <a href={`mailto:${props.email}`}>{props.email}</a>
          {' | '}
          <a href={props.url}>{props.url}</a>
        </p>
      </div>
      <span className="id">{props.id}</span>
    </div>
  </div>
);

export default card;
