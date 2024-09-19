import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth" // Faz a rolagem suave
    });
  };

  return (
    <>
      <footer>
        <div className="voltar" onClick={scrollToTop}>
          <h4>Voltar ao início</h4>
        </div>
      </footer>
      <div className="footer-info">
        Dúvidas, sugestões ou reclamações: <section>E-mail - brenda@teste.com.br</section>
      </div>
      <div className="cnpj">
        BR Personalizados <section>CNPJ: 48.172.757/0001-99</section>
      </div>
    </>
  );
}

export default Footer;
