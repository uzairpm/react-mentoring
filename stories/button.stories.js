import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Common/Button';

storiesOf('Primary Button', module).add('Default', () => (
    <Button label="Hit me!" className="btn btn-primary btn-sm"></Button>
));

storiesOf('Toggle Button', module).add('State checked', () => (
    <Button label="Hit me!" className="btn btn-sm btn-dark"></Button>
));

storiesOf('Toggle Button', module).add('State unchecked', () => (
    <Button label="Hit me!" className="btn btn-sm btn-outline-dark"></Button>
));
