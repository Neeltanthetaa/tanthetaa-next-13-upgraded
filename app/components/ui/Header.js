import Image from "next/image";

export const Header = ({ content, path }) => {
	return (
		<div className="flex flex-col items-center w-full place-content-center">
			<div className="relative items-center w-full h-screen place-content-center">
				<Image
					src={`/assets/${path}/${content.bgImage}.png`}
					alt="image"
					className="object-cover"
					fill={true}
				/>
			</div>

			<div className="absolute w-full h-screen max-w-6xl">
				<div className="grid items-center w-full h-full max-w-6xl grid-cols-1 gap-3 p-3 md:grid-cols-2">
					<div className="col-span-1 leading-snug ">
						<h1 className="font-mono text-4xl font-bold">
							<span className="text-white">{content.title}</span>
							<br />
							<span className="text-yellow-500">{content.subtitle}</span>
						</h1>
						<h5 className="text-white/70">{content.description}</h5>
					</div>
					<div className="relative h-64 col-span-1">
						<Image
							src={`/assets/${path}/${content.heroImage}.png`}
							alt="image"
							className="object-cover"
							fill={true}
						/>
					</div>
				</div>
			</div>

			{/* <div className="grid w-full max-w-5xl grid-cols-2">
				<div className=""></div>

				<div className=""></div>
			</div> */}
		</div>
	);
};
