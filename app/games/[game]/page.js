import { Header, SectionHeader } from "@/app/components/ui";
import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const getContent = async ({ slug }) => {
	const content = allGuides.find((guide) => guide.slug === slug);
	return content;
};

const Game = async ({ params }) => {
	const content = await getContent({ slug: `games/${params.game}` });
	if (!content) return notFound();

	return (
		<main className="flex flex-col items-center w-full">
			<Header content={content.data.header} path="games" />
			<SectionHeader content={content.data.section1} />
		</main>
	);
};

export default Game;
