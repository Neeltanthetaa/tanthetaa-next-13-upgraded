/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";

export const Fundamental = ({ content, path }) => {
	const cardStyles = {
		background: "#fff",
		borderRadius: "16px",
		boxShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
	};

	return (
		<>
			<div className="container flex flex-wrap justify-center gap-5 mx-auto mt-10">
				<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
					{content?.map((item) => (
						<div key={item?.id} className=" !h-full p-10" style={cardStyles}>
							<img src={`/assets/${path}/${item?.image}.png`} alt={item?.name} className />
							<div className="">
								<h3 className="my-3 font-mono font-semibold md:text-lg ">
									<Markdown text={item?.title} />
								</h3>
							</div>
							<div className>
								<p className="text-base text-[#59587B] font-normal pt-2 font-inter ">
									<Markdown text={item?.description} />
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
