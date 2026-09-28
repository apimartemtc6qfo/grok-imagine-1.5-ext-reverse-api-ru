// Node 18+ | grok-imagine-1.5-ext-reverse-api-ru
const BASE = "https://api.apimart.ai/v1";
const H = { "Authorization": `Bearer ${process.env.APIMART_KEY}`,
             "Content-Type": "application/json" };

const r = await fetch(`${BASE}/images/generations`, {
  method: "POST", headers: H,
  body: JSON.stringify({ model: "grok-imagine-1.5-apimart", prompt: "cozy reading nook, warm lamp, cinematic"
     , size: "1:1", resolution: "1K", n: 1}),
});
const d = await r.json();
console.log(JSON.stringify(d, null, 2));
