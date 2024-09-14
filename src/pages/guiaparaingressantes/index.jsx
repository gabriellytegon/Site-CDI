import './style.css'
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Bigcard from '../../components/BigCard';

const GuiaParaIngressantes = () => {
    return (
        <>
            <Header
                title='Guia para ingressantes'
                content='Chegou no campus e se sentiu perdido? A CDI te ajuda!'
            />
            <div className="mapadocampus">
                <div id="title-map">
                    <h2 className='titles-h2'>Mapa do campus</h2>
                </div>
                <div className="content">
                    <img src="src\assets\images\mapa-campus.png" alt="mapa do campus" id='mapa' />
                </div>
            </div>

            <div className="eletivas">
                <div id="title-eletiva">
                    <h2>Eletivas e horas complementares</h2>
                </div>
                <div className="content">
                    <p>Em todos os nossos cursos, as horas complementares desempenham um papel fundamental no enriquecimento da sua formação acadêmica. Estas horas podem ser obtidas por meio de diversas atividades, como participação em palestras inspiradoras, visitas técnicas empolgantes, envolvimento em projetos de monitoria e muito mais.Ao clicar no botão abaixo você será redirecionado a página de catálogos de cursos. Basta acessar o seu que você conseguirá encontrar informações detalhadas sobre a quantidade de horas complementares necessárias para a conclusão do seu curso e orientações sobre como conquistá-las.</p>
                </div>

                <div style={{ width: 400, fontWeight: 'bold', margin: 'auto', marginTop: '1.5rem' }} className="button">
                    <Button
                        buttonText={"Clique para acessar os catálogos de cursos"}
                        fontSize={13}
                        option={0}
                        link={"https://www.dac.unicamp.br/portal/graduacao/catalogos-de-cursos"}

                    />



                </div>
            </div>

            <div className="maisinformacoes">
                <Bigcard button_text={"Clique para entrar no grupo"} cardtitle={"Estágio e Vagas"}
                    text={"Para ficar por dentro das principais vagas na área de tecnologia entre no nosso grupo do WhatsApp"}
                    breakrow
                    link={"https://chat.whatsapp.com/CiIVlFZVrheG3mGxRMxseU"}
                    
                    
                />
                <Bigcard button_text={"Clique para saber mais"} cardtitle={"Grupos de matérias"}
                    text={"Pensando em facilitar a sua vida, caro aluno, a CDI criou um grupo no WhatsApp para cada matéria"}
                    
                />


            </div>


            {/* <div className="maisinformacoes">
                <Bigcard
                    button_text={<a href="URL_DO_GRUPO_ESTAGIO" target="_blank" rel="noopener noreferrer">Clique para entrar no grupo</a>}
                    cardtitle={"Estágio e Vagas"}
                    text={"Para ficar por dentro das principais vagas na área de tecnologia entre no nosso grupo do WhatsApp"}
                /> */}



            <div className="intercambioiniciacao">
                <article>  {/* tag genérica */}
                    <div className="intercambio">
                        <div className="title-intercambio">
                            <h2>Intercâmbio</h2>

                        </div>

                        <div className="intercambio-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat iusto dolorum saepe eveniet sit asperiores suscipit nihil error laborum, repellendus consequatur amet corrupti similique. Ipsa voluptatem hic cumque ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat optio quos nisi, nihil qui dolores adipisci aliquid, labore error dolore maiores non alias deserunt veritatis cupiditate dolor accusamus. Voluptatem. lo</p>
                        </div>

                    </div>

                    <div className="iniciacao">
                        <div className="title-iniciacao">
                            <h2>Iniciação científica e tecnológica</h2>
                        </div>
                        <div className="iniciacao-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis eum minima aliquam totam saepe, veniam id repudiandae quas placeat ad dolores. Ipsam, expedita? Libero a suscipit tenetur exercitationem in. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere numquam doloremque similique aliquid expedita ducimus voluptatem, nisi consequuntur corrupti modi tempora nesciunt cumque beatae. In consequuntur iusto quisquam reiciendis temporibus.</p>
                        </div>

                    </div>

                </article>

                <aside>
                    <img id="aviao" src="src\assets\images\logoaviao.svg" alt="imagem de um avião em um globo" />


                </aside>

            </div>

            <Footer />
        </>
    )
}

export default GuiaParaIngressantes;

//uma div para os dois bigcards