import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../../components/CardCarousel";
import Button from "../../components/Button";
import AvatarHome from "../../components/AvatarHome";
import Footer from "../../components/Footer";
import imagemBSI from '../../assets/images/imagemBSI.png'
import imagemTADS from '../../assets/images/imagemTADS.png'
import checkIcon from '../../assets/icons/checkIcon.svg'
import './style.css'

const Home = () => {
    return (
        <>
            <Header></Header>
            <div id="cdi">
                <h1>O que é a CDI?</h1>
                <p>
                    Além de ser um canal oficial de comunicação entre os alunos e os docentes, organizamos uma série de eventos como: cursos, palestras e visitas técnicas em parceria com a comunidade e com empresas tech.
                    Nós trabalhamos para que sua jornada na Universidade seja aproveitada da melhor forma possível! Conte com a CDI durante seu ano letivo para tirar dúvidas e sugerir ideias.
                </p>
                <div id="conceitos">
                    <div className="conceito">
                        <h2>Missão</h2> <br />
                        <p>
                            Nós da CDI, apoiamos a comunidade de T.I. da FT e desenvolvemos os membros da comissão para que suas jornadas acadêmicas sejam as mais enriquecedoras
                        </p>
                    </div>
                    <div className="conceito">
                        <h2>Visão</h2> <br />
                        <p>
                            Trata-se do nosso objetivo maior, até 2026, pretendemos aumentar em 50% nosso impacto na comunidade de T.I.
                        </p>
                    </div>
                    <div className="conceito">
                        <h2>Valores</h2> <br />
                        <p><img src={checkIcon} alt="icone de check" /> Comprometimento</p>
                        <p><img src={checkIcon} alt="icone de check" /> Empatia</p>
                        <p><img src={checkIcon} alt="icone de check" /> Transparência</p>
                    </div>
                </div>
                <div id="carousel">
                    <CardCarousel photos={["https://picsum.photos/1600/1200?random=1", "https://picsum.photos/1600/1200?random=2", "https://picsum.photos/1600/1200?random=3", "https://picsum.photos/1600/1200?random=4", "https://picsum.photos/1600/1200?random=5", "https://picsum.photos/1600/1200?random=6", "https://picsum.photos/1600/1200?random=7"]}></CardCarousel>
                </div>
            </div>

            <div id="cursos">
                <h1>Cursos de tecnologia</h1>

                <div id="bsi">
                    <img src={imagemBSI} alt="imagem BSI" />
                    <div className="curso_texto">
                        <h2>Bacharelado em Sistemas de Informação</h2>
                        <p>O curso de S.I possui um papel fundamental em um mundo que viabiliza a rapidez da informação pois a compreensão dos sistemas informacionais é de extrema importância. O profissional qualificado pela área desenvolve duas principais habilidades: projetar e implantar os sistemas que integram o mundo digital.</p>
                        <p><img src={checkIcon} alt="icone de check" /> Período: Integral</p>
                        <p><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 3.060 horas</p>
                        <p><img src={checkIcon} alt="icone de check" /> Integralização: 08 semestres</p>
                        <p><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/94g/curriculo.html'}
                                option={0}
                            />
                        </div>
                    </div>
                </div>

                <div id="tads">
                    <div className="curso_texto">
                        <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
                        <p>O curso de T.A.D.S, têm como intuito formar profissionais com uma base sólida, de modo ao qual seja prático aplicar os conhecimentos teóricos na intensa vivência prática que o mundo da tecnologia proporciona.</p>
                        <p><img src={checkIcon} alt="icone de check" /> Período: Noturno</p>
                        <p><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 2.430 horas</p>
                        <p><img src={checkIcon} alt="icone de check" /> Integralização: 07 semestres</p>
                        <p><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/36t/curriculo.html'}
                                option={0}
                            />
                        </div>
                    </div>
                    <img src={imagemTADS} alt="imagem TADS" />
                </div>
            </div>

            <div id="equipe">
                <h1>Quem faz parte da CDI?</h1>

                <div className="area">
                    <h2>Presidência</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>

                <div className="area">
                    <h2>A.A.E.</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>

                <div className="area">
                    <h2>Administrativo</h2>

                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>

                </div>

                <div className="area">
                    <h2>Financeiro</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>

                <div className="area">
                    <h2>G.P.</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>

                <div className="area">
                    <h2>Marketing</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>

                <div className="area">
                    <h2>Projetos</h2>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                    <div className="membro"><AvatarHome src="https://placehold.co/400" alt="..." nome="Nome e Sobrenome"></AvatarHome></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;