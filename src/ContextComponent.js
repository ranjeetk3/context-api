import React from 'react';

import {MyContext} from './Context';
import ContextChild from './ContextChild';


class ContextComponent extends React.Component {
    render() {
        return (
      		<MyContext.Provider value={{fname:"Ranjeet", lname:"Kumar", topic:"Context API"}}>
	            <container>
	                <ContextChild/>
	            </container>
	        </MyContext.Provider>
        );
    }
}
    
export default ContextComponent