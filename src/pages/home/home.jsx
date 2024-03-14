import React from "react";
import "./style.css";
import areas from "./areas.json";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Home = () => {
  const areasData = areas.areas;
  return (
    <>
      <div className="headerCover">
        <Navbar />
        <div className="contentHeader">
          <div className="titleCDI">
            <p>Nós somos a</p>
            <h2>Comissão discente de</h2>
            <h1>Informática</h1>
            <h3>da Faculdade de Tecnologia da Unicamp</h3>
          </div>
          <div className="penguinCDI">
            <img src="../../assets/icons/penguin.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="contentAboutUs">
          <h2>Sobre nós</h2>
          <p>
            A Comissão Discente de Informática (CDI) da Unicamp é um elo vital
            entre alunos e docentes, facilitando a comunicação. Além disso,
            promove eventos como cursos, palestras e visitas técnicas em
            parceria com a comunidade e empresas de tecnologia. Nós trabalhamos
            para que sua jornada na Universidade seja aproveitada da melhor
            forma possível! Conte com a CDI durante seu ano letivo para tirar
            dúvidas e sugerir ideias.
          </p>
        </div>

        <div className="contentCourses">
          <h2>Cursos</h2>
          <div className="contentBsiCourse">
            <div className="imageBsiCourse">
              <img src="../../assets/images/imagemBSI.png" alt="" />
            </div>
            <div className="contentTextBsiCourse">
              <div className="textBsiCourse">
                <h3>Bacharelado em Sistema da Informação</h3>
                <p>
                  O curso de S.I possui um papel fundamental em um mundo que
                  viabiliza a rapidez da informação pois a compreensão dos
                  sistemas informacionais é de extrema importância. O
                  profissional qualificado pela área desenvolve duas principais
                  habilidades: projetar e implantar os sistemas que integram o
                  mundo digital.
                </p>
                <ul>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Período: Integral
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Carga horária estimada: 3.060 horas
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Integralização: 08 semestres
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Vagas: 45
                  </li>
                </ul>
                <Link
                  href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2023/cursos/94g/curriculo.html"
                  target="_blank"
                >
                  <button>Acesse o currículo pleno</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="contentTadsCourse">
            <div className="contentTextTadsCourse">
              <div className="textTadsCourse">
                <h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
                <p>
                  O curso de T.A.D.S, têm como intuito formar profissionais com
                  uma base sólida, de modo ao qual seja prático aplicar os
                  conhecimentos teóricos na intensa vivência prática que o mundo
                  da tecnologia proporciona.
                </p>
                <ul>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Período: Noturno
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Carga horária estimada: 2.430 horas
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Integralização: 07 semestres
                  </li>
                  <li>
                    <img
                      src="../../assets/icons/checkIcon.svg"
                      alt="Ícone de check"
                    />
                    Vagas: 45
                  </li>
                </ul>
                <Link
                  href="https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2023/cursos/36t/curriculo.html"
                  target="_blank"
                >
                  <button>Acesse o currículo pleno</button>
                </Link>
              </div>
            </div>
            <div className="imageTadsCourse">
              <img src="../../assets/images/imagemTADS.png" alt="" />
            </div>
          </div>
        </div>
        <div className="contentAreas">
          <h2>Áreas</h2>
          <br />
          {areasData.map((area, index) => (
            <div key={index} className="area">
              <h3>{area.nome}</h3>
              <br />
              <div className="memberContainer" display="flex">
                {area.membros.map((membro, i) => (
                  <div key={i} className="member">
                    <img
                      src="./img/area_simbolico.jpg"
                      alt={`Membro ${i + 1}`}
                    />
                    <p className="memberName">{membro}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
