import App from './App.svelte';
import AppDados from './AppDados.svelte';

const app = new AppDados({
	target: document.body,
	props: {
		//name: 'world'
	}
});

export default app;