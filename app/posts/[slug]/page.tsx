import { notFound } from "next/navigation";
import { allPosts } from "@/.contentlayer/generated";
import { Mdx } from "@/app/mdx";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PageProps["params"]) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(({ slug }) => ({
    slug,
  }));
}

export default async function Post({ params }: PageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <header className="mt-16 grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
              {post.title}
            </h1>
          </div>
        </header>

        <section className="mt-16">
          <div className="grid gap-16 md:grid-cols-4">
            <div className="md:col-span-2 md:col-start-2">
              <Mdx code={post.body.code} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
