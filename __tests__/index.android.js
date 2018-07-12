import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from '../src/components/AppFooter';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(
    <AppFooter />
  );
  expect(tree).toBeDefined();
});
