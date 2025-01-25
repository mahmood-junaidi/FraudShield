exports.handler = async (event) => {
    const datainfo = JSON.parse(event.body);
    console.log("Received data:", data);
  
    // Process the data (e.g., analyze text or transcript)
    const processedData = { message: Processed: ${datainfo.text || datainfo.transcript} };
  
    return {
      statusCode: 200,
      body: JSON.stringify(processedData),
    };
  };