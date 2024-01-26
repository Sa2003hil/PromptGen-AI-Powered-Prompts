import { connectToDatabse } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request, { params }) => {
    try {
        await connectToDatabse();

        const prompts = await Prompt.find({ creator: params.id }).populate({ path: 'creator', options: { strictPopulate: false } });

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.error("Error fetching prompts:", error);
        return new Response(`Failed to fetch all prompts: ${error.message}`, { status: 500 });
    }

}