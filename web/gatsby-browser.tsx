import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/global.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => <div className="bg-slate-50">{element}</div>;
