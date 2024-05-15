import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Fabricio Next',
}
export default function Page() {
  return<div className="content-home">
    <div>
      <h1>Bem vindo</h1>
      <p>Sou Fabricio Sobral Pinto, um desenvolvedor frontend com mais de 20 anos de experiência na indústria de tecnologia, pronto para compartilhar minha jornada e projetos com você.</p>
    </div>
  </div>
}