import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from '../../../components';

storiesOf('Elements/Button', module)
    .add('Primary', () => (
        <Button >
            test
        </Button>
    ));