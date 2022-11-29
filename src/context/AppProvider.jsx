import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const values = useMemo(() => {
  }, []);

  return (
    <AppContext.Provider value={ values }>
      <div className="provider">
        {children}
      </div>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default AppProvider;