
export default function BoxCarrossel(Props) {

    return (

        <div className='box-carousel'>

            <div className='img-carousel' style={{ backgroundImage: `url(${Props.imageCarrossel})` }}>

                <div className="bg-color-carousel">


                    <div className="box-text-carousel">

                        <h1 className="title-carousel">
                            {Props.titleCarrossel}
                        </h1>

                        <p className="text-carousel">
                            {Props.textCarrossel}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

