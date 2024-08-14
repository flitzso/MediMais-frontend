import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/ChatPopup.css'; // Arquivo CSS para estilizar o balão
import 'bootstrap-icons/font/bootstrap-icons.css';


const ChatPopup = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {/* Botão do balão de chat */}
      <div className="chat-bubble" onClick={toggleChat}>
        <i className="bi bi-chat-fill"></i>
      </div>

      {/* Janela de chat */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h5>Chat</h5>
            <button className="btn btn-sm btn-close" onClick={toggleChat}></button>
          </div>
          <div className="chat-body">
            {/* Conteúdo do chat */}
            <p>Olá! Como posso ajudar?</p>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua mensagem..."
            />
            <button className="btn btn-primary">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
