import React from 'react';
import NavHeader from '../components/NavHeader';
import { AppContext } from "../App";



export const Index = () => {
   React.useContext(AppContext);
  return (
    <div className='App'>
      <div>Index</div>
        <NavHeader />
      
    </div>
  )
}


