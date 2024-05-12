import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <MenuLateral />
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
    )
}

export default Layout