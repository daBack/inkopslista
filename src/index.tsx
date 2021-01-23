import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import { ComponentRouter } from 'components';
import { MainTheme } from 'theme' 

ReactDOM.render(
	<React.StrictMode>
		<ComponentRouter theme={MainTheme} />
	</React.StrictMode>,
	document.getElementById('root')
);
