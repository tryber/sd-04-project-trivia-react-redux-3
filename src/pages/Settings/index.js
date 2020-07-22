import React from 'react';
import { Link } from 'react-router-dom';
import FormSettings from '../../components/FormSettings';

const Configuration = () => (
  <div>
    <h1 data-testid="settings-title">settings</h1>
    <FormSettings />
    <Link to="/" >home</Link>
  </div>
);

export default Configuration;
