import React from 'react'; 

// This is not a component, this is just a function
const withClass = (WrappedComponent, className) => {
    return prop => (
        <div className={className}> 
            <WrappedComponent/>
        </div>
    );
}; 

export default withClass; 