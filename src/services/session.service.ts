class SessionService {
	private readonly key: string = `ViSiOn____vIsIoN__OAUTH_W)d9kf`
		.split('')
		.map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
		.join('');

	public create_auth(
		data: any,
		payload: number = 'VISION|OAUTH'.charCodeAt(0)
	) {
		const key = `\VISION/ - \oauth.${payload}` + '/0/./' + payload;
		const value = `\VISION/ - \oauth.${data}` + '/0';

		console.log(this.dencrypt(this.encrypt(key)));
		console.log(this.dencrypt(this.encrypt(value)));

		sessionStorage.setItem(this.encrypt(key), this.encrypt(value));
	}

	public getKeyOAauth(): string {
		return this.encrypt(
			`\VISION/ - \oauth.${'VISION|OAUTH'.charCodeAt(0)}` +
				'/0/./' +
				'VISION|OAUTH'.charCodeAt(0)
		);
	}

	public encrypt(str: string) {
		let encryptedText = '';

		for (let i = 0; i < str.length; i++) {
			const charCode =
				str.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length);
			encryptedText += String.fromCharCode(charCode);
		}

		return encryptedText;
	}

	private dencrypt(str: string) {
		let decryptedText = '';

		for (let i = 0; i < str.length; i++) {
			const charCode =
				str.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length);
			decryptedText += String.fromCharCode(charCode);
		}

		return decryptedText;
	}
}

export default new SessionService();
