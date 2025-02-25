import Cookies from 'js-cookie';
import hashService from './hash.service';

class AuthService {
	private readonly cookie: string | undefined = Cookies.get('oauth');
	private readonly metaAuth: HTMLMetaElement | null = document.querySelector(
		'meta[name="authenticate"]'
	);

	private isMetaAuthenticate(): string {
		if (this.metaAuth) return this.metaAuth.content;

		console.warn("Meta tag 'authenticate' not found.");
		return '';
	}

	public isAuthenticate(): boolean {
		return this.cookie ? true : false;
	}

	public isMetaAuth(): boolean {
		if (this.metaAuth) return true;

		return false;
	}

	public login(password: string): string {
		const auth = this.isMetaAuthenticate();

		if (!password) {
			throw new Error('Password not found or empty');
		}

		if (auth !== hashService.getHash(password)) {
			throw new Error('Invalid password');
		}

		Cookies.set('oauth', 'authorized');
		return 'Welcome to the vision UI panel!';
	}

	public register(password: string): string {
		if (!password) {
			throw new Error('Password not found or empty');
		}

		return hashService.getHash(password);
	}
}

export default new AuthService();
