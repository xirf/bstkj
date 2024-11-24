import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';


export const GET: APIRoute = async ({ params, request }) => {
    let articles = await getCollection('articles');

    articles = articles.map(a => {
        return {
            ...a.data,
            slug: a.slug,
            id: a.id,
            body: a.body,
        }
    })

    return new Response(
        JSON.stringify(articles)
    )
}