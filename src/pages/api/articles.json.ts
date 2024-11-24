import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';


export const GET: APIRoute = async ({ params, request }) => {
    const articles =  await getCollection('articles');

    return new Response(
        JSON.stringify(articles)
    )
}