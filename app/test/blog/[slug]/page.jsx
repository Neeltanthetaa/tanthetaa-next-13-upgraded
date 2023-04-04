import { notFound } from "next/navigation";

export const getBlogContent = async ({ slug }) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/slugify/slugs/blog/hello-world-in-lorem-ipsum-style?populate=*`,
			{
				headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}` },
			}
		);
		const data = await res.json();

		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
	}
};

const Test = async ({ params }) => {
	const slug = params.slug;
	const content = await getBlogContent({ slug });
	if (!content || content.data === null) return notFound();

	return <>Test</>;
};

export default Test;
