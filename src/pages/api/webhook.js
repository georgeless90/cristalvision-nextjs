//1. Esta es la function que meneja el endpoint que se comunica con el hook de make.com

export default async function handler(req, res) {
  try {

    //1. Se hace usao de la environment variable
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