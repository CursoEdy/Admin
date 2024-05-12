import Layout from "@/components/template/Layout";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <Layout titulo={`Página inicial`} subtitulo={`Consumindo um template`}>
      <h1>Hone</h1>
      <h3>Conteudo da página inicial</h3>
    </Layout>
  );
}
