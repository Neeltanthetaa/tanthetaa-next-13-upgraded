import {
	GameHead,
	OurDevelopment,
	ChooseGame,
	OurDevServices,
	GameCard,
	Technologies,
	GameProcess,
	QuickFacts,
	GamesSlider,
	Fundamental,
	TypesofGames,
	GameFaqs,
	GameBlogs,
	PreviousOrNext,
	DreamProject,
	CooperationModels,
} from "@/app/components/ui/games";
import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const getContent = async ({ slug }) => {
	const content = allGuides.find((guide) => guide.slug === slug);
	return content;
};

export const metadata = {
	title: "Expert Game development and consulting services from Tan θ Software Studio",
	description:
		"A professional team of Tan θ Software Studio's Game developers with honed skills in developing high-load and scalable solutions is at your disposal!",
};

const Game = async ({ params }) => {
	const content = await getContent({ slug: `games/${params.game}` });
	if (!content) return notFound();

	return (
		<>
			{/* 1st Component Start */}
			<GameHead path={`games/${params.game}`} content={content.data.header} />
			{/* 1st Component End */}

			{/* 2nd Component Start */}
			<OurDevelopment content={content.data.section1} />
			<ChooseGame path={`games/${params.game}`} content={content.data.section1.services} />
			{/* 2nd Component End */}

			{/* 3rd Component Start */}
			<OurDevServices path={`games/${params.game}`} content={content.data.section13} />
			{/* In Progress */}
			{/* 3rd Component End */}

			{/* 4th Component Start */}
			<OurDevelopment content={content.data.section2} />
			<GameCard content={content.data.section2.services} />
			{/* 4th Component End */}

			{/* 5th Component Start */}
			<OurDevelopment content={content.data.section3} />
			<CooperationModels path={`games/${params.game}`} content={content.data.section3} />
			{/* 5th Component End */}

			{/* 6th Component Start */}
			<OurDevelopment content={content.data.section4} />
			<Technologies path={`games/${params.game}`} content={content.data.section4.services} />
			{/* 6th Component End */}

			{/* 7th Component Start */}
			<OurDevelopment content={content.data.section5} />
			<div className="my-20">
				<div className="grid w-full gap-4 lg:grid-cols-2 h-min">
					<div className="flex gap-8">
						<div className="flex flex-col">
							<img src="/assets/games/android-game-development-services/grassGroup.png" alt="" />
						</div>
						<div>
							<div>
								<img src="/assets/games/android-game-development-services/groupStar.png" alt="" />

								<div className="">
									<h3 className="mt-20 text-[#043E86] font-bold text-2xl font-mono">
										Super Mario Run
									</h3>
									<p className="mt-2 text-base text-[#333333]">
										Juicy Fruits is game where the player manipulates tiles in order to make them
										disappear according to a matching criterion
									</p>

									<div className="flex flex-row flex-wrap items-center gap-4 my-12">
										{[1, 2, 3, 4, 5].map((i, el) => (
											<div className="" key={el}>
												<img
													src="/assets/games/android-game-development-services/favourites1.png"
													alt=""
												/>
											</div>
										))}
									</div>

									<div>
										<h4 className="mt-3 text-lg font-inter ">
											<span className="font-semibold">Work type: &nbsp;</span>
											Full-cycle development
										</h4>
										<h4 className="mt-3 text-lg font-inter ">
											<span className="font-semibold">Game type: &nbsp;</span>
											Match-three game
										</h4>
										<h4 className="mt-3 text-lg font-inter ">
											<span className="font-semibold">Technology: &nbsp;</span>
											Unity
										</h4>
										<h4 className="mt-3 text-lg font-inter ">
											<span className="font-semibold">Platform: &nbsp;</span>
											OS/Android smartphones and tablets
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="grid place-content-end">
						<img src="/assets/games/android-game-development-services/gameProjectGroup.png" alt="" />
					</div>
				</div>
			</div>
			{/* In Progress  */}
			{/* 7th Component End */}

			{/* 8th Component Start */}
			<OurDevelopment content={content.data.section6} />
			<GameProcess content={content.data.section6.services} />
			{/* 8th Component End */}

			{/* 9th Component Start */}
			<OurDevelopment content={content.data.section7} />
			<QuickFacts content={content.data.section7.services} />
			<GamesSlider />
			{/* In Progress  */}
			{/* 9th Component End */}

			{/* 10th Component Start */}
			<OurDevelopment content={content.data.section8} />
			<Fundamental path={`games/${params.game}`} content={content.data.section8.services} />
			{/* 10th Component End */}

			{/* 11th Component Start */}
			<OurDevelopment content={content.data.section9} />
			<TypesofGames path={`games/${params.game}`} content={content.data.section9} />
			{/* 11th Component End */}

			{/* 12th Component Start */}
			<OurDevelopment content={content.data.section10} />
			<GameFaqs content={content.data.section10.services} />
			{/* 12th Component End */}

			{/* 13th Component Start */}
			<OurDevelopment content={content.data.section11} />
			<GameBlogs path={`games/${params.game}`} content={content.data.section11.services} />
			{/* 13th Component End */}

			{/* 14th Component Start */}
			<PreviousOrNext path={`games/${params.game}`} content={content.data.section12.services} />
			{/* 14th Component End */}

			{/* 15th Component Start */}
			<DreamProject />
			{/* 15th Component End */}
		</>
	);
};

export default Game;
