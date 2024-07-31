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
    const imagensCarrossel = [
        'src/assets/images/carrossel/imagem_2024-06-19_191234553.png',
        'src/assets/images/carrossel/IMG-20230615-WA0152.jpg',
        'src/assets/images/carrossel/IMG-20230615-WA0155.jpg',
        'src/assets/images/carrossel/IMG-20230615-WA0156.jpg',
        'src/assets/images/carrossel/IMG-20230615-WA0161.jpg',
        'src/assets/images/carrossel/IMG-20230629-WA0004.jpg',
        'src/assets/images/carrossel/IMG-20230816-WA0050.jpg',
        'src/assets/images/carrossel/IMG-20230816-WA0053.jpg',
        'src/assets/images/carrossel/IMG-20230816-WA0057.jpg',
        'src/assets/images/carrossel/IMG-20230927-WA0123.jpg',
        'src/assets/images/carrossel/IMG-20231005-WA00181.jpg',
        'src/assets/images/carrossel/IMG-20231007-WA0002.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0021.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0027.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0028.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0031.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0032.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0035.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0038.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0044.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0047.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0048.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0071.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0073.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0074.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0077(1).jpg',
        'src/assets/images/carrossel/IMG-20231130-WA00721.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA00781.jpg',
        'src/assets/images/carrossel/IMG-20240425-WA0075.jpg',
        'src/assets/images/carrossel/IMG-20240426-WA0073.jpg',
        'src/assets/images/carrossel/IMG-20240523-WA0037.jpg',
        'src/assets/images/carrossel/IMG-20240615-WA0005.jpg',
        'src/assets/images/carrossel/IMG-20240618-WA0065.jpg',
        'src/assets/images/carrossel/IMG-20240619-WA0051.jpg',
        'src/assets/images/carrossel/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg',
        'src/assets/images/carrossel/Screenshot_2024-06-19-19-21-18-291_com.instagram.android-edit.jpg'];

    return (
        <>
            <Header></Header>
            <div id="cdi">
                <h1>O que é a CDI?</h1>
                <p>
                    Além de ser um canal oficial de comunicação entre os alunos e os docentes, organizamos uma série de eventos como: cursos, palestras e visitas técnicas em parceria com a comunidade e com empresas tech.
                    <br></br>
                    Nós trabalhamos para que sua jornada na Universidade seja aproveitada da melhor forma possível! Conte com a CDI durante seu ano letivo para tirar dúvidas e sugerir ideias.
                </p>
                <div id="conceitos">
                    <div className="conceito">
                        <h2>Missão</h2> <br />
                        <p>
                            Apoiamos a comunidade de T.I. da FT e desenvolvemos os membros da comissão para que suas jornadas acadêmicas sejam as mais enriquecedoras.
                        </p>
                    </div>
                    <div className="conceito">
                        <h2>Visão</h2> <br />
                        <p>
                            Até 2026, pretendemos aumentar em 50% nosso impacto na comunidade de T.I.
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
                    <CardCarousel photos={imagensCarrossel}></CardCarousel>
                </div>
            </div>

            <div id="cursos">
                <h1>Cursos de tecnologia</h1>

                <div id="bsi">
                    <img src={imagemBSI} alt="imagem BSI" />
                    <div className="curso_texto">
                        <h2>Bacharelado em Sistemas de Informação</h2>
                        <p>O curso de S.I possui um papel fundamental em um mundo que viabiliza a rapidez da informação pois a compreensão dos sistemas informacionais é de extrema importância. O profissional qualificado pela área desenvolve duas principais habilidades: projetar e implantar os sistemas que integram o mundo digital.</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Período: Integral</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 3.060 horas</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Integralização: 08 semestres</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/94g/curriculo.html'}
                                option={1}
                            />
                        </div>
                    </div>
                </div>

                <div id="tads">
                    <div className="curso_texto">
                        <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
                        <p>O curso de T.A.D.S, têm como intuito formar profissionais com uma base sólida, de modo ao qual seja prático aplicar os conhecimentos teóricos na intensa vivência prática que o mundo da tecnologia proporciona.</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Período: Noturno</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 2.430 horas</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Integralização: 07 semestres</p>
                        <p className="item"><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/36t/curriculo.html'}
                                option={1}
                            />
                        </div>
                    </div>
                    <img src={imagemTADS} alt="imagem TADS" />
                </div>
            </div>

            <div id="equipe">
                <h1>Conheça nossos membros!</h1>

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