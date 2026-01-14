// WhatsApp destino (formato internacional sin +, sin espacios)
const WHATSAPP_NUMBER = "17872315401";   // +1 (787) 231-5401
const KEYWORD = "INFO";

// Abre WhatsApp con mensaje
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Mensaje base
function buildBaseMessage() {
  return `${KEYWORD}
Biosalud LATAM
Quiero orientación sobre Bariátrica Natural / FeelGreat.`;
}

// Botones rápidos
document.getElementById("btnWhatsAppTop")?.addEventListener("click", () => {
  openWhatsApp(buildBaseMessage());
});
document.getElementById("btnWhatsAppMetodo")?.addEventListener("click", () => {
  openWhatsApp(buildBaseMessage());
});
document.getElementById("btnWhatsAppFooter")?.addEventListener("click", () => {
  openWhatsApp(buildBaseMessage());
});

// ===== TEST METABÓLICO =====
let lastScore = 0;
let lastResultText = "";

document.getElementById("btnScore")?.addEventListener("click", () => {
  const boxes = [...document.querySelectorAll("#checks input[type=checkbox]")];
  lastScore = boxes.reduce((acc, b) => acc + (b.checked ? Number(b.value) : 0), 0);

  document.getElementById("score").textContent = String(lastScore);

  lastResultText = "Vas bien. Si quieres estructura, te guío paso a paso.";
  if (lastScore >= 2)
    lastResultText = "Hay señales comunes de desbalance de hábitos/metabolismo. Te comparto una guía educativa y próximos pasos.";
  if (lastScore >= 4)
    lastResultText = "Varias señales repetidas. Vale la pena trabajar una estructura clara (y si aplica, validar con tu médico).";

  document.getElementById("result").textContent = lastResultText;
});

document.getElementById("btnWhatsAppTest")?.addEventListener("click", () => {
  const msg = `${KEYWORD}
Biosalud LATAM
Resultado Test Express: ${lastScore}/6
Interpretación: ${lastResultText}

Quiero orientación sobre Bariátrica Natural / FeelGreat.`;

  openWhatsApp(msg);
});

// ===== FORMULARIO PRINCIPAL =====
document.getElementById("waForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const nombre = (data.get("nombre") || "").toString().trim();
  const ciudad = (data.get("ciudad") || "").toString().trim();
  const objetivo = (data.get("objetivo") || "").toString().trim();
  const horario = (data.get("horario") || "").toString().trim();
  const nota = (data.get("nota") || "").toString().trim();

  const msg = `${KEYWORD}
Nombre: ${nombre}
Ciudad: ${ciudad}
Objetivo: ${objetivo}
Horario ideal: ${horario}
Nota: ${nota}

Quiero orientación sobre Bariátrica Natural / FeelGreat.`;

  openWhatsApp(msg);
});
