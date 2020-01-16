import Head from 'next/head'
import React from 'react'

import '../public/styles/main.css'

interface INews {
  title: string
  link: string
  comments: string
}

const news: INews[] = [
  {
    comments: '115',
    link:
      'https://g1.globo.com/mundo/noticia/2020/01/09/comandante-iraniano-diz-que-bombardeio-de-bases-dos-eua-da-inicio-a-serie-de-ataques.ghtml',
    title: 'Bombardeio a bases inicia série de ataques aos EUA, afirma Irã'
  },
  {
    comments: '30',
    link:
      'https://globoesporte.globo.com/futebol/times/cruzeiro/noticia/alexandre-mattos-deixa-o-clube-quatro-dias-depois-de-aceitar-ajudar-cruzeiro.ghtml',
    title: 'Mattos deixa Cruzeiro quatro dias após aceitar ajudar o clube'
  },
  {
    comments: '25',
    link:
      'https://globoesporte.globo.com/futebol/noticia/flamengo-e-goias-tentam-superar-entraves-para-selar-o-futuro-de-michael-nesta-quinta-entenda.ghtml',
    title: 'Fla e Goiás esperam fechar caso Michael na 3ª reunião em 24h'
  }
]

const NewsList = () => (
  <div className="column">
    {news.map((item, key) => (
      <div key={key} className="list-container">
        <a className="link" href={item.link}>
          {item.title}
        </a>
        <p className="comment">Comments: {item.comments}</p>
      </div>
    ))}
  </div>
)

export default () => (
  <>
    <Head>
      <title>News</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>Welcome to News Page!</h1>
      <NewsList />
    </div>
  </>
)
