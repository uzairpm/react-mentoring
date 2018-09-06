import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '../src/components/Footer/Footer.jsx';

storiesOf('Footer', module).add('Default', () => (
  <Footer showSearchButton={true}>Content</Footer>
));
