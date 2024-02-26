export default function BoxServicos(Props){
    return(
        <div className="card-servicos" onClick={Props.functionNavigateServicos} data-aos="flip-left" data-aos-duration='2300'>
            
            <div className="img-title-card-servicos">
                <img src={Props.imageServicos} alt="" className="img-card-servicos"/>
                <h2 className="title-card-servicos">{Props.titleCardServicos}</h2>
            </div>

            <p className="text-card-servicos">{Props.textCardServicos}</p>

        </div>
    )
}