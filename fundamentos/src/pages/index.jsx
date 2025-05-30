import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#a45b71" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9" />
            <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#fa054a" />
            <Navegador texto="Conteudo dinamico" destino="/dinamico" cor="black" />
        </div>
    )

}