export const SectionHeader = ({ content }) => {
	return (
		<div className="flex flex-col items-center w-full p-3 py-32 space-y-5 text-center">
			<h2 className="font-mono text-4xl font-bold">
				<span className="text-purple-800">{content.title}</span>
				<br />
				<span>{content.subtitle}</span>
			</h2>
			{content.description && <h5 className="max-w-6xl">{content.description}</h5>}
		</div>
	);
};
