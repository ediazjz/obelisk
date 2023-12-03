export function generateColorTokens(colorConfig) {
	let cssVariables = ':root {\n';

	colorConfig.forEach((group) => {
		group.colors.forEach((color) => {
			const baseName = `--${group.name}${color.name === 'DEFAULT' ? '' : `-${color.name}`}`;

			// Light mode variable
			cssVariables += `    ${baseName}-light: ${color.light.value};\n`;
			cssVariables += `    ${baseName}-light-text: ${color.light.text};\n`;

			// Dark mode variable
			cssVariables += `    ${baseName}-dark: ${color.dark.value};\n`;
			cssVariables += `    ${baseName}-dark-text: ${color.dark.text};\n`;
		});
	});

	cssVariables += '}';

	return cssVariables;
}
