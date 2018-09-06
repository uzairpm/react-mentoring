import React from 'react';
import { storiesOf } from '@storybook/react';

import NoMatch404 from '../src/components/Common/NoMatch404';

storiesOf('NoMatch404', module).add('Default', () => (
  <NoMatch404 />
));
