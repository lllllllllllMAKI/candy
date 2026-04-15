exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({
        message: "Pagamento criado",
        produto: data.name,
        valor: data.price
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro ao criar pagamento",
        details: error.message
      })
    };
  }
};
