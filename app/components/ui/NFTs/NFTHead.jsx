/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";

export const NFTHead = ({ content, path }) => {
	const textStyle = {
		color: "transparent !important",
		"-webkit-text-stroke-width": "1px",
		"-webkit-text-stroke-color": "#fff",
	};
	return (
		<>
			{/* 1st Blog  mt-16 md:mt-[140px]*/}
			<div
				className={`max-h-min w-full `}
				style={{
					background: `url(${`/assets/${path}/${content?.bgImage}.png`} ) no-repeat center center `,
					backgroundSize: "cover",
				}}
			>
				<div className="container p-40 px-4 mx-auto md:px-24 lg:px-24 xl:px-0 xl:p-80">
					<div className="grid xl:grid-cols-2 gap-4 md:gap-0 !place-content-center place-items-center ">
						<div className="w-full max-w-xl mx-auto">
							<h1 className="font-mono text-2xl font-bold leading-tight text-white md:text-5xl">
								{content?.title && <Markdown text={content?.title} />}
								<br />
								<span className="text-[#7B3FE4] ">
									{content?.subtitle && <Markdown text={content?.subtitle} />}
								</span>
								<br />
								<span className="" style={textStyle}>
									{content?.subtitle1 && <Markdown text={content?.subtitle1} />}
								</span>
							</h1>

							<p className="text-[#F0F0F0]  font-inter  font-normal text-base mt-5">
								{content?.description && <Markdown text={content?.description} />}
							</p>

							<p className="text-[#F0F0F0]  font-inter  font-normal text-base mt-5">
								{content?.description1 && <Markdown text={content?.description1} />}
							</p>

							<div className="mt-6 ">
								<button className="bg-[#7B3FE4] font-mono text-base shadow-buttonShadow rounded whitespace-nowrap hover:bg-[#29e248] transition-colors hover:text-black hover:shadow-none font-semibold duration-500 ease-in-out py-2 px-4 text-white">
									{content?.buttonName && content?.buttonName}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
