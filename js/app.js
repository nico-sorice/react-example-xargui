'use strict';

const App = () => {
    return (
      <HomePage></HomePage>
    );
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));