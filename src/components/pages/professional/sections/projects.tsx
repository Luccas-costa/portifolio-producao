'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import fonts from '@/styles/globals/fonts.module.css'
import Imagem from '../../../../../public/projects/teko-bag.png'
import Imagem3 from '../../../../../public/projects/criativos.png'
import gif from '../../../../../public/projects/Vídeo do WhatsApp de 2025-06-29 à(s) 10.32.15_b6a87950.gif'
import Imagem2 from '../../../../../public/projects/emproducao.webp'

import {
  ArrowRight,
  GithubLogo,
  MonitorPlay,
  ShoppingCart,
  TrafficCone,
} from '@phosphor-icons/react'
import Link from 'next/link'

export default function Projects() {
  const [verMais, setVerMais] = useState(false)
  return (
    <div className={`mt-[250px] pb-[200px]`} id="projects">
      <div className="flex flex-col items-center gap-[70px]">
        {/* titulos */}
        <div
          className={`${fonts.monserrat} flex flex-col justify-center gap-4 text-center text-zinc-200 screen550:gap-6`}
        >
          {/* titulo */}
          <div className="text-5xl">My Works</div>
          {/* subtitulo */}
          <div className="max-w-[550px] px-3 text-zinc-300/80 screen550:px-0">
            Projetos que refletem minha jornada como desenvolvedor,
            transformando ideias em experiências digitais com propósito,
            qualidade e atenção aos detalhes.
          </div>
        </div>
        {/* cards */}
        <div className="hidden flex-col items-center gap-[30px] screen1000:flex">
          <Card
            title="Teko Bag"
            subtitle="Um ecoommerce focado na venda de eco-bags personalizadas. Um projeto de empreendorismo com foco na sustentabilidade e qualidade."
            image={Imagem}
            gitname="teko-bag"
            url="https://teko-bag.com"
            icon={1}
          />
          <Card
            title="Criativos para storys"
            subtitle="Nas horas vagas crio alguns conteudos para storys do instagram. Videos animados, rapidos e interativos buscando maior engajamento para a empresa parceira."
            image={gif}
            gitname=""
            url="/professional/criatives"
            icon={3}
            gitIconNotVisible={true}
            linkNextTrue={true}
            isgif={true}
          />
          <Card
            title="Em produção"
            subtitle="Ainda estou criando esse novo projeto, assim que pronto colocarei ele aqui."
            image={Imagem2}
            gitname=""
            url=""
            icon={2}
          />

          <div className="mt-6 cursor-pointer text-zinc-500/70 underline">
            Ver mais
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] screen1000:hidden">
          <CardMobile
            title="Teko Bag"
            subtitle="Um ecoommerce focado na venda de eco-bags personalizadas. Um projeto de empreendorismo com foco na sustentabilidade e qualidade."
            image={Imagem}
            gitname="teko-bag"
            url="https://teko-bag.com"
            icon={1}
          />
          <CardMobile
            title="Criativos para storys"
            subtitle="Storys comerciais para empresas parceiras.. Videos animados, rapidos e interativos buscando maior engajamento para a empresa parceira."
            image={Imagem3}
            gitname=""
            url="/professional/criatives"
            icon={3}
            gitIconNotVisible={true}
            linkNextTrue={true}
          />
          {verMais && (
            <CardMobile
              title="Em produção"
              subtitle="Ainda estou criando esse novo projeto, assim que pronto colocarei ele aqui."
              image={Imagem2}
              gitname=""
              url=""
              icon={2}
            />
          )}

          <div
            className="mt-6 cursor-pointer text-zinc-500/70 underline"
            onClick={() => setVerMais(!verMais)}
          >
            {verMais ? 'Ver menos' : 'Ver mais'}
          </div>
        </div>
      </div>
    </div>
  )
}

type CardProps = {
  title: string
  subtitle: string
  image: StaticImageData
  gitname: string
  url: string
  icon: number
  gitIconNotVisible?: boolean
  linkNextTrue?: boolean
  isgif?: boolean
}

const Card = ({
  title,
  subtitle,
  image,
  gitname,
  url,
  icon,
  gitIconNotVisible,
  linkNextTrue,
  isgif,
}: CardProps) => {
  return (
    <div
      className={`relative h-[600px] w-[990px] rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/75 p-5 screen1100:w-[1090px] screen1200:w-[1190px]`}
    >
      <div className="flex justify-between">
        <div className={`${fonts.monserrat} flex flex-col gap-[10px] p-5`}>
          <div className="text-4xl font-medium text-zinc-200">{title}</div>
          <div className="max-w-[380px] font-light text-zinc-300/80">
            {subtitle}
          </div>
          <div className="mb-1 mt-2 flex items-center gap-1">
            {icon === 1 && (
              <>
                <ShoppingCart size={20} weight="light" color="#0d9488" />
                <div className="text-light text-teal-600">ecommerce</div>
              </>
            )}
            {icon === 2 && (
              <>
                <TrafficCone size={20} weight="light" color="#f97316 " />
                <div className="text-light text-orange-500">produção</div>
              </>
            )}
            {icon === 3 && (
              <>
                <MonitorPlay size={22} weight="light" color="#38bdf8 " />
                <div className="text-light text-sky-400">criativos</div>
              </>
            )}
          </div>
          {!linkNextTrue && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg bg-zinc-200 font-medium text-zinc-950 transition-all hover:bg-zinc-300/70"
            >
              Visit Project
            </a>
          )}
          {linkNextTrue && (
            <Link
              href={url}
              className="flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg bg-zinc-200 font-medium text-zinc-950 transition-all hover:bg-zinc-300/70"
            >
              Visit Criatives
            </Link>
          )}
          {!gitIconNotVisible && (
            <a
              href={`https://github.com/Luccas-costa/${gitname}`}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-8 left-9"
            >
              <GithubLogo
                size={22}
                weight="regular"
                color="rgb(228 228 231 / 0.9)"
              />
            </a>
          )}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="group relative aspect-square h-[560px] overflow-hidden rounded-xl">
            {isgif && (
              <Image
                src={image}
                alt={title}
                fill
                unoptimized // necessário para garantir que o GIF preserve a animação
                className="object-cover"
              />
            )}
            {!isgif && (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
            <div className="absolute bottom-3 right-3 rotate-[45deg] opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight
                size={32}
                weight="bold"
                color="rgb(228 228 231 / 0.7)"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

const CardMobile = ({
  title,
  subtitle,
  image,
  gitname,
  url,
  icon,
  gitIconNotVisible,
  linkNextTrue,
  isgif,
}: CardProps) => {
  return (
    <div
      className={`h-[800px] w-[360px] rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/75 p-5 screen400:w-[390px] screen450:w-[440px] screen500:h-[1000px] screen500:w-[490px] screen600:w-[590px] screen700:w-[690px] screen800:w-[790px] screen900:w-[890px]`}
    >
      <div className="flex flex-col">
        <div
          className={`${fonts.monserrat} relative flex h-[350px] flex-col items-center gap-[10px] p-5`}
        >
          <div className="text-center text-4xl font-medium text-zinc-200">
            {title}
          </div>
          <div className="mx-auto max-w-[400px] text-center font-light text-zinc-300/80">
            {subtitle}
          </div>
          <div className="mb-5 mt-2 flex items-center justify-center gap-1">
            {icon === 1 && (
              <>
                <ShoppingCart size={20} weight="light" color="#0d9488" />
                <div className="text-light text-teal-600">ecommerce</div>
              </>
            )}
            {icon === 2 && (
              <>
                <TrafficCone size={20} weight="light" color="#f97316 " />
                <div className="text-light text-orange-500">produção</div>
              </>
            )}
            {icon === 3 && (
              <>
                <MonitorPlay size={22} weight="light" color="#38bdf8 " />
                <div className="text-light text-sky-400">criativos</div>
              </>
            )}
          </div>
          {!linkNextTrue && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg bg-zinc-200 font-medium text-zinc-950 transition-all hover:bg-zinc-300/70"
            >
              Visit Project
            </a>
          )}
          {linkNextTrue && (
            <Link
              href={url}
              className="flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-lg bg-zinc-200 font-medium text-zinc-950 transition-all hover:bg-zinc-300/70"
            >
              Visit Criatives
            </Link>
          )}
          {!gitIconNotVisible && (
            <a
              href={`https://github.com/Luccas-costa/${gitname}`}
              target="_blank"
              rel="noreferrer"
              className="lef-1/2 absolute bottom-5"
            >
              <GithubLogo
                size={22}
                weight="regular"
                color="rgb(228 228 231 / 0.9)"
              />
            </a>
          )}
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="group relative flex h-[410px] w-[320px] items-center justify-center overflow-hidden rounded-xl screen400:w-[350px] screen450:w-[400px] screen500:h-[610px] screen500:w-[450px] screen600:w-[550px] screen700:w-[650px] screen800:w-[750px] screen900:w-[850px]">
            {isgif && (
              <Image
                src={image}
                alt={title}
                fill
                unoptimized // necessário para garantir que o GIF preserve a animação
                className="object-cover"
              />
            )}
            {!isgif && (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
            <div className="absolute bottom-3 right-3 rotate-[45deg] opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRight
                size={32}
                weight="bold"
                color="rgb(228 228 231 / 0.7)"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
