import { notFound } from "next/navigation";

// apiUrl without plugin
// `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/slugify/slugs/blog/hello-world-in-lorem-ipsum-style?populate[seo][populate]=*`,

export const getBlogContent = async ({ slug }) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/slugify/slugs/blog/hello-world-in-lorem-ipsum-style?populate=deep`,
			{
				headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPER_TOKEN}` },
			}
		);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const generateMetadata = async ({ params }) => {
	const slug = params.slug;
	const content = await getBlogContent({ slug });
	if (!content) return;
	const seo = content.data.attributes.seo;

	return {
		title: seo.metaTitle,
		description: seo.metaDescription,
		keywords: seo.keywords,
		openGraph: {
			type: "article",
			title: seo.metaTitle,
			description: seo.metaDescription,
			images: [
				{
					...seo.metaImage.data.attributes,
					url: `${process.env.NEXT_PUBLIC_BLOG_API_URL}${seo.metaImage.data.attributes.url}`,
					alt: seo.metaImage.data.attributes.alternativeText,
					alternativeText: null,
					formats: null,
				},
			],
			...seo.metaArticle,
			author: {
				id: null,
			},
			locale: "en-US",
		},
	};
};

const Test = async ({ params }) => {
	const slug = params.slug;
	const content = await getBlogContent({ slug });
	if (!content || content.data === null) return notFound();

	return <>Test</>;
};

export default Test;
