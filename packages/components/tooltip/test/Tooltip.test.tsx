import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from '../src/Tooltip';

describe('Tooltip', function () {
  it('renders', () => {
    const tree = render(<Tooltip>hello world</Tooltip>);

    expect(tree).toBeTruthy();
  });
});
