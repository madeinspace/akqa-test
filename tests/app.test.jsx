import 'jsdom-global/register';
import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../src/App';
import Store from '../src/components/Store';

describe('The App', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />)).toExist();
  });

  it('should have a Store component', () => {
    expect(shallow(<App />).contains(<Store title="Woman's tops" />)).toBe(
      true,
    );
  });
});

describe('The HelloWorld component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Store title="Woman's tops" />)).toExist();
  });

  it('should render to static HTML', () => {
    expect(render(<Store title="Woman's tops" />).text()).toEqual(
      "Woman's tops",
    );
  });
});
