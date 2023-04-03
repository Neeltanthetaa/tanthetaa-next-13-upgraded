const MDXComponents = {
	a: (props) => {
		return (
			<a
				className="relative inline-block text-blue-400 transition-all duration-300 ease-in-out border-b-2 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500"
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			/>
		);
	},
	p: (props) => {
		return <p className="" {...props} />;
	},
	em: (props) => {
		return <em className="italic" {...props} />;
	},
	strong: (props) => {
		return <strong className="font-bold" {...props} />;
	},
	del: (props) => {
		return <del className="line-through" {...props} />;
	},
};

export default MDXComponents;
