import Decoration from "../assets/Decoration.svg"
import Fundactions from "./Fundactions";
function WhoWeHelp(){
    return(
        <section className={'organization'}>
            <div className="who">
                <h1>Komu pomagamy?</h1>
                <img src={Decoration}/>
                <div className="btn">
                    <button className={'btn1'}>Fundacjom</button>
                    <button className={'btn2'}>Organizacjom pozarządowym</button>
                    <button className={'btn3'}>Lokalnym zbiórką</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consecteur adipiscing elit sed do eiusmod tempor
                </p>
            </div>
            <div className={'organizationThinks'}>
                <Fundactions/>
            </div>
        </section>
        )
}
export default WhoWeHelp;