import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "ImagineAI",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <head>
            <link rel="icon" href="http://localhost:3000/_next/image?url=%2Fassets%2Fimages%2FIA.png&w=64&q=75" />
        </head>
        <body>
            <Provider>
                <div className='gradient' />
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>

        </body>
    </html>
);

export default RootLayout;