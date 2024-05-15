import { redirect } from 'next/navigation';

async function fetchCharacters(page: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  console.log("characters");
  if (!res.ok) return undefined;
  return res.json();
}
export default async function Profile({ params }: { params: { id: string } }) {
  const id = params.id; // Obtém o ID da rota
  const page = parseInt(id); // Converte o ID para número, pois o endpoint espera um número de página

  const characters = await fetchCharacters(page);
  
  // Verifica se a resposta é válida
  if (!characters) {
    redirect('/login'); // Redireciona para a página de login se a solicitação falhar
    return null;
  }

  console.log("characters"); // Exibe os dados no console para verificação

  // Aqui você pode manipular os dados como desejar, por exemplo, renderizar uma lista de personagens na página

  return (
    <div>
      {/* Renderize os dados aqui */}
    </div>
  );
}
