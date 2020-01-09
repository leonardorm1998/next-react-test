import React from 'react'
import Head from 'next/head'

import "../styles/styles.css";

const news = [
  {
    title: 'Bombardeio a bases inicia série de ataques aos EUA, afirma Irã',
    link: 'https://g1.globo.com/mundo/noticia/2020/01/09/comandante-iraniano-diz-que-bombardeio-de-bases-dos-eua-da-inicio-a-serie-de-ataques.ghtml',
    comments: '115'
  },
  {
    title: 'Mattos deixa Cruzeiro quatro dias após aceitar ajudar o clube',
    link: 'https://globoesporte.globo.com/futebol/times/cruzeiro/noticia/alexandre-mattos-deixa-o-clube-quatro-dias-depois-de-aceitar-ajudar-cruzeiro.ghtml',
    comments: '30'
  },
  {
    title: 'Fla e Goiás esperam fechar caso Michael na 3ª reunião em 24h',
    link: 'https://globoesporte.globo.com/futebol/noticia/flamengo-e-goias-tentam-superar-entraves-para-selar-o-futuro-de-michael-nesta-quinta-entenda.ghtml',
    comments: '25'
  },
]

const NewsList = () =>
  <div className='column'>
    {
      news.map((item, key) =>
        <div key={key} className='list-container'>
          <a className='link' href={item.link}>{item.title}</a>
          <p className='comment'>Comments: {item.comments}</p>
        </div>
      )
    }
  </div>

const NewsContent = () => (
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

export default NewsContent
