exports.handler = async () => {
  try {

    const response = await fetch("https://docs.google.com/spreadsheets/d/1eQYHz7dRfmD1IIQ1AkWAR1P3rNYO_el4ecSK-Ei46_Y/gviz/tq?tqx=out:json&sheet=Estoque");

    const text = await response.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));

    const rows = json.table.rows;

    const estoque = rows.map(row => ({
      produto: row.c[1]?.v,
      email: row.c[2]?.v,
      senha: row.c[3]?.v,
      entregue: row.c[4]?.v
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(estoque)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
