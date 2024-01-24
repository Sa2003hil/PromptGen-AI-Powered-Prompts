import { connectToDatabse } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    try {
        await connectToDatabse();
        const { userID, prompt, tag } = await req.json(); // Destructure prompt and tag from the request

        const newPrompt = new Prompt({
            creator: userID,
            prompt,
            tag
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
};
