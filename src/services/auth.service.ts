import hashService from './hash.service';
import sessionService from './session.service';

class AuthService {
	private readonly session: string | null = sessionStorage.getItem(
		sessionService.getKeyOAauth()
	);
	private readonly metaAuth: HTMLMetaElement | null = document.querySelector(
		'meta[name="authenticate"]'
	);

	private isMetaAuthenticate(): string {
		if (this.metaAuth) return this.metaAuth.content;

		console.warn("Meta tag 'authenticate' not found.");
		return '';
	}

	public isAuthenticate(): boolean {
		const auth = this.isMetaAuthenticate();

		const [salt, hash] = auth.split('.');
		if (!salt || !hash) {
			throw new Error('Invalid password');
		}

		if (
			this.session ===
			sessionService.encrypt(`\VISION/ - \oauth.${salt}` + '/0')
		) {
			return true;
		}

		return false;
	}

	public isMetaAuth(): boolean {
		if (this.metaAuth) return true;

		return false;
	}

	public async login(password: string): Promise<string> {
		const auth = this.isMetaAuthenticate();

		const [salt, hash] = auth.split('.');
		if (!salt || !hash) {
			throw new Error('Invalid password');
		}

		if (!password) {
			throw new Error('Password not found or empty');
		}

		const newHash = await hashService.getHash(password, salt);
		if (auth !== newHash) {
			throw new Error('Invalid password');
		}

		sessionService.create_auth(salt);
		return 'Welcome to the vision UI panel!';
	}

	public async register(password: string): Promise<string> {
		if (!password) {
			throw new Error('Password not found or empty');
		}

		return hashService.getHash(password);
	}
}

export default new AuthService();
