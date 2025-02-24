class HashService {
	private hash(input: string): string {
		let hash = 5381;
		const len = input.length;

		for (let i = 0; i < len; i++) {
			hash = (hash << 5) + hash + input.charCodeAt(i);
		}

		hash = ((hash >>> 0) * 0x5bd1e995) | 0;
		hash ^= hash >>> 15;
		hash = ((hash >>> 0) * 0x5bd1e995) | 0;
		hash ^= hash >>> 13;
		hash = ((hash >>> 0) * 0x5bd1e995) | 0;
		hash ^= hash >>> 16;


		return Math.abs(hash).toString(36);
	}

	public getHash(str: string): string {
        return this.hash(str);
	}
}

export default new HashService();
