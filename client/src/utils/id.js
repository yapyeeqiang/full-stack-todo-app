export function* generateID(i) {
	yield i;

	while (true) {
		yield (i += 1);
	}
}
