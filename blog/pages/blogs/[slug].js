import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

import { getBlogPostBySlug, getAllBlogs } from 'lib/api';


const BlogDetail = ({blogPost}) => {
    debugger;
    return (
        <PageLayout>
            <h1>{blogPost.title}</h1>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blogPost = await getBlogPostBySlug(params.slug);

    return {
        props: { blogPost }
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();

    return {
        paths: blogs?.map(blog => ({params: {slug: blog.slug}})),
        fallback: false
    }
}

export default BlogDetail;