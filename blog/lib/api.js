import client from 'lib/sanity';


const blogFields = `
    title, 
    subtitle,
    'slug': slug.current,
    'coverImage': coverImage.asset->url,
    publishAt,
    'author': author->{name, 'avatarUrl': avatar.asset->url},
    _createdAt
`;

const authorFields = `
    name,
    'avatar': avatar.asset->url,
    shortBio
`;


export async function getAllBlogs() {
    const results = await client
        .fetch(`*[_type == "blog"]{${blogFields}} | order(publishAt desc)`);

    return results;
}

export async function getAllAuthors() {
    const results = await client
        .fetch(`*[_type == "author"]{${authorFields}} | order(_createdAt asc)`);

    return results;
}