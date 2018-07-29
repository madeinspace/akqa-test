import 'jsdom-global/register';
import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../src/App';
import HelloWorld from '../src/components/hello-world';

describe('The App', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />)).toExist();
  });

  it('should have a HelloWorld component', () => {
    expect(shallow(<App />).contains(<HelloWorld title="AKQA test" />)).toBe(
      true,
    );
  });
});

describe('The HelloWorld component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<HelloWorld title="AKQA test" />)).toExist();
  });

  it('should render to static HTML', () => {
    expect(render(<HelloWorld title="AKQA test" />).text()).toEqual(
      'AKQA test',
    );
  });
});
