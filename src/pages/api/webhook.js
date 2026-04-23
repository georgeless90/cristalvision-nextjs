export default async function handler(req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("WEBHOOK:", process.env.MAKE_WEBHOOK_URL);

    const response = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("MAKE RESPONSE:", text);

    return res.status(200).json({
      success: true,
      makeStatus: response.status,
    });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
}