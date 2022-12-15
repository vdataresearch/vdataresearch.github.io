export const slugFromPath = (path) =>
	path.match(/([\w-]+)\/[\w-]+\.(svelte\.md|md|svx)/i)?.[1] ?? null;
