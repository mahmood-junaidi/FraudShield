// Netlify function to handle input from the Chrome extension
exports.handler = async (event) => {
    try {
        // Parse the incoming JSON body
        const { content } = JSON.parse(event.body);

        // Validate the input
        if (!content) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "No content provided.", alert: true }),
            };
        }

        // Example: Process the content (customize this logic)
        const containsFraud = content.toLowerCase().includes("fraud");

        // Return a response
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: containsFraud
                    ? "Alert: Suspicious content detected!"
                    : "Content is clean.",
                alert: containsFraud,
            }),
        };
    } catch (error) {
        console.error("Error processing content:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", alert: true }),
        };
    }
};