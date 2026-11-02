import lain from "./assets/autismlain.jpg"

function Mania() {
    return <li><ol>"Estudar!!!"</ol> <ol>"Estudar..."</ol> <ol>"Estu.... dar...."</ol></li>
}

export function Titulo() {
    return <h1>EStudando React</h1>
}

export function Imagens() {
    let elemImagens = 
    <div>
        <img src={lain} className="base"/>
        <img src={lain} className="base"/>
        <img src={lain} className="base"/>
        <p>YEY!</p>
    </div>
    return elemImagens
}


export function Corpo() {
    let corp = {
        principal: <main>
            <p>Parametros dos componentes react são passados de algumas formas como objetos, listas, entre outros...</p>
        </main>,
        pezinho: <footer>Copyright ©Eu mesmo, estou aprendendo muita coisa nesses ultimos tempos</footer>,

    }
    return corp;
}
export default Mania;