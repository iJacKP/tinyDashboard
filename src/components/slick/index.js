import Slider from "react-slick";

export default function Slick({ data }) {

    const settings = {

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };


    return <div>
        <h2 style={{ margin: '1rem', fontFamily: 'Staatliches, cursive', display: "flex", alignContent: "center", justifyContent: "center", alignText: 'center', width: "100%" }}>Sobreaviso Semanal 👨🏽‍💻 </h2>
        <div style={{ background: "#070808", color: "#00ad54", fontFamily: 'Staatliches, cursive' }}>
            <Slider {...settings}>
                {data ? data.map((dadosDuty) => {
                    console.log(dadosDuty)
                    return <div style={{ width: '1050px !important' }} >
                        <h2> {dadosDuty.date} : {dadosDuty.name} </h2>
                    </div>


                })
                    : null}
            </Slider>

        </div>

    </div>


}