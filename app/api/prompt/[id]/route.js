import { connectToDatabse } from "@utils/database";
import Prompt from "@models/prompt";

// Get request 

export const GET = async (request, { params }) => {
    try {
        await connectToDatabse();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if (!prompt) return new Response("Prompt not found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        console.error("Error fetching prompts:", error);
        return new Response(`Failed to fetch all prompts: ${error.message}`, { status: 500 });
    }

}


// Patch request

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDatabse();

        const existingPrompt = await Prompt.findById(params.id);

        id(!existingPrompt)
        return new Response("Prompt not found", { status: 404 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        const updatedPrompt = await existingPrompt.save();

        return new Response(JSON.stringify(updatedPrompt), { status: 200 });

    } catch (error) {
        console.error("Error updating prompt:", error);
        return new Response(`Failed to update prompt: ${error.message}`, { status: 500 });

    }

}


// Delete request
export const deletePrompt = async (request, { params }) => {
    try {
        await connectToDatabse();

        const prompt = await Prompt.findByIdAndDelete(params.id);

        if (!prompt) return new Response("Prompt not found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 });

    } catch (error) {
        console.error("Error deleting prompt:", error);
        return new Response(`Failed to delete prompt: ${error.message}`, { status: 500 });

    }
}