"use client"
import React, { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store';
interface ProviderReduxProps {
  children: ReactNode;
}
function ProviderRedux({ children }: ProviderReduxProps) {

  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>

  )
}

export default ProviderRedux
