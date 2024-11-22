// let { API_URL } = process.env;
let url = "http://localhost:3000/posts"
// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch(url); // Usando a URL importada
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
