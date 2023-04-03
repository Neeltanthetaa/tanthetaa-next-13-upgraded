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

export const dynamic = "force-dynamic";

// export const generateStaticParams = () => {
// 	// const posts = await fetch("https://.../posts").then((res) => res.json());

// 	// return posts.map((post) => ({
// 	// 	slug: post.slug,
// 	// }));

// 	return [
// 		{
// 			game: "android-game-development-services",
// 		},
// 	];
// };

export const getContent = async ({ slug }) => {
	const content = allGuides.find((guide) => guide.slug === slug);
	return content;
};

export const metadata = {
	title: "Expert Game development and consulting services from Tan θ Software Studio",
	description:
		"A professional team of Tan θ Software Studio's Game developers with honed skills in developing high-load and scalable solutions is at your disposal!",
};

const Test = async ({ params }) => {
	// const content = await getContent({ slug: `games/${params.game}` });
	// if (!content) return notFound();

	return (
		<>
			{/* 1st Component Start */}
			{/* <GameHead path={`games/${params.game}`} content={content.data.header} /> */}
			{/* 1st Component End */}

			<h1>Hello World</h1>
		</>
	);
};

export default Test;
