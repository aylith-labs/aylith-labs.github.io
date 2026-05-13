export function tilt(node: HTMLElement, options: { max?: number; scale?: number } = {}) {
	const { max = 6, scale = 1.02 } = options;

	function handleMouseMove(e: MouseEvent) {
		const rect = node.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = ((y - centerY) / centerY) * -max;
		const rotateY = ((x - centerX) / centerX) * max;

		node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
	}

	function handleMouseLeave() {
		node.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
	}

	node.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
	node.style.willChange = 'transform';
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', handleMouseLeave);
		}
	};
}
