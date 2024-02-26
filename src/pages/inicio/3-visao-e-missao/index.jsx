import ImgLogo from './../../../assets/visao-missao/logoImpacto.png'

import './missaoVisao-style.css'


export default function VisaoMissao() {
    return (
        <main className="visaoMissao">

            <div className="container-left-visaoMissao">

                <div className="box-title-visaoMissao" data-aos="fade-right" data-aos-duration='2000'>
                    <h1 className="title-visaMissao">Por que <span className="span-title-visaoMissao">escolher <br /> </span> a DJE Costa? </h1>
                </div>

                <div className="box-text-visaoMissao" data-aos="fade-right" data-aos-duration='2000'>

                    <p className="text-visaoMissao">
                        Com xx anos de experiência dedicada no mercado, a DJE COSTA ENGENHARIA E CONSTRUÇÕES se destaca como uma empresa especializada em construções e pinturas prediais, oferecendo serviços de alta qualidade a preços acessíveis para uma ampla variedade de clientes.
                    </p>

                    <p className="text-visaoMissao">
                        Temos vários pontos fortes que exploramos e aproveitamos como empresa, sendo alguns deles: especialização em projetos de construção e pintura predial, além de nossa ampla experiência na execução de obras com eficiência e excelência.
                    </p>

                </div>

            </div>

            <div className="container-right-visaoMissao">
                <img src={ImgLogo} alt="imagem logo impacto" className='img-logo-visaoMissao' data-aos="fade-left" data-aos-duration='2000'/>
            </div>


        </main>
    )
}