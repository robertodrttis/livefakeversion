import Webcam from "react-webcam";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import user from "../assets/userp.png";
import "./style.css";
import close from "../assets/close.png";
import audio from "../assets/audio.png";
import video from "../assets/video.png";
import troca from "../assets/troca.png";
import fade from "../assets/efeitorosto.png";
import sr from "../assets/sr.png";
import ask from "../assets/ask.png";
import mv from "../assets/mv.png";
import usr from "../assets/usr.png";
import setabaixo from "../assets/setabaixo.png";
import eyes from "../assets/eyes.png";
import React, { useState, useEffect } from "react";

const mockMessages = [
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
    { user: user, username: "robertodevfront", message: "Olá, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, manda um salve" },
    { user: user, username: "robertodevfront", message: "Oi, Estou adorando!" },
    { user: user, username: "robertodevfront", message: "Oi, tudo bem?" },
    { user: user, username: "robertodevfront", message: "Oi, Muito legal essa live!" },
  ];
  

const CameraWithOverlay = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < mockMessages.length) {
        setDisplayedMessages((prev) => [
          ...prev,
          mockMessages[currentMessageIndex],
        ]);
        setCurrentMessageIndex((prev) => prev + 1);
      }

      if (displayedMessages.length >= 5) {
        setDisplayedMessages((prev) => prev.slice(1));
      }
    }, 3000); // Mensagem é atualizada a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentMessageIndex, displayedMessages]);

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      />

      {/* Sobreposição de mensagens */}
      {/* Sobreposição do usuário no topo */}
      <Row className="message-user">
        <Col xs="8">
          <img className="img-userp" src={user} alt="User" />
          <img className="img-seta" src={setabaixo} alt="User" />
         

        </Col>
        <Col>
          <p className="text-userp">robertodevfront</p>
          <p className="box-live">AO VIVO   </p>
          <p className="numberbox">576K<img className="img-eyes" src={eyes} alt="User" /></p>
        </Col>
      </Row>
      <Row className="icon">
        <Col xs="12">
          <img className="icon-overlay-au" src={audio} alt="Ícone mockado" />
        </Col>
      </Row>
      <Row className="icon-video">
        <Col xs="12">
          <img className="icon-overlay-vd" src={video} alt="Ícone mockado" />
        </Col>
      </Row>
      <Row className="icon-troca">
        <Col xs="12">
          <img className="icon-overlay-tc" src={troca} alt="Ícone mockado" />
        </Col>
      </Row>
      <Row className="icon-fade">
        <Col xs="12">
          <img className="icon-overlay-fade" src={fade} alt="Ícone mockado" />
        </Col>
      </Row>
      <div className="message-box">
        {displayedMessages.map((msg, index) => (
          <Row key={index}>
            <Col xs="2" className="col-fixed">
              <img className="img-user" src={msg.user} alt="User" />
            </Col>
            <Col className="col-fixedt">
              <p className="text-p">{msg.username}</p>
              <p className="text-sub">{msg.message}</p>
            </Col>
          </Row>
        ))}
      </div>
      <div className="message-comment">
        <Row className="color-back">
          <Col xs="7">
            <input className="style-input" placeholder="Comentar"></input>
          </Col>
          <Col xs="4">
            <img className="icon-overlay-mv" src={mv} alt="Ícone mockado" />
            <img className="icon-overlay-g" src={usr} alt="Ícone mockado" />
            <img className="icon-overlay-sr" src={ask} alt="Ícone mockado" />
            <img className="icon-overlay-fl" src={sr} alt="Ícone mockado" />
          </Col>
        </Row>
      </div>

      {/* Sobreposição de ícones ou imagens */}
      <img className="icon-overlay" src={close} alt="Ícone mockado" />
    </div>
  );
};

export default CameraWithOverlay;
