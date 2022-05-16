import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/global.css';
import Layout from './src/components/layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => (
  <div className="bg-slate-50">
    <Layout>{element}</Layout>;
  </div>
);
