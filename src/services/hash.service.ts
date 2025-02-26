class HashService {
	private iterations: number;
	private memoryCost: number;
	private saltSize: number;

	constructor(iterations = 50000, memoryCost = 1024 * 1024, saltSize = 16) {
		this.iterations = iterations;
		this.memoryCost = memoryCost;
		this.saltSize = saltSize;
	}

	// Генерация случайной соли
	private generateSalt(): string {
		const array = new Uint8Array(this.saltSize);
		crypto.getRandomValues(array);

		return Array.from(array, (byte) =>
			byte.toString(16).padStart(2, '0')
		).join('');
	}

	private async hashPassword(password: string): Promise<string> {
		const salt = this.generateSalt();
		let hash = new TextEncoder().encode(password + salt);

		for (let i = 0; i < this.iterations; i++) {
			// hash = await crypto.subtle.digest('SHA-512', hash);
			const arrayBuffer = await crypto.subtle.digest('SHA-512', hash);
			hash = new Uint8Array(arrayBuffer);

			// Дополнительное перемешивание данных
			for (let j = 0; j < hash.length; j++) {
				hash[j] = (hash[j] ^ salt.charCodeAt(j % salt.length)) % 256;
			}
		}

		// Нагрузка на память (заполняем массив)
		const memory = new Uint8Array(this.memoryCost);
		for (let i = 0; i < this.memoryCost; i++) {
			memory[i] = hash[i % hash.length] ^ i % 256;
		}

		// Итоговое хеширование
		const finalHash = await crypto.subtle.digest('SHA-256', memory);
		return (
			salt +
			'.' +
			Array.from(new Uint8Array(finalHash))
				.map((b) => b.toString(16).padStart(2, '0'))
				.join('')
		);
	}

	public async getHash(str: string): Promise<string> {
		return await this.hashPassword(str);
	}
}

export default new HashService();
