import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => (WrappedComponent) => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    injectors = getInjectors(this.context.store); // eslint-disable-line

    static displayName = `withReducer(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    static contextTypes = {
      store: PropTypes.object.isRequired,
    };


    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(key, reducer);
    }


    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
