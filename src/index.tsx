import React from 'react';
import ReactDOM from 'react-dom/client';
import '.././src/app/styles/index.css';
import App from './app/App';
import reportWebVitals from './app/utils/reportWebVitals';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';
import { router } from './app/routes/routes';
import vkBridge from '@vkontakte/vk-bridge';
import { Provider } from 'react-redux';
import { store } from './app/store';

vkBridge.send('VKWebAppInit');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<RouterProvider router={router}>
						<Provider store={store}>
							<App />
						</Provider>
					</RouterProvider>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	</React.StrictMode>,
);

if (process.env.NODE_ENV === 'development') {
	import('../src/app/utils/eruda');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
