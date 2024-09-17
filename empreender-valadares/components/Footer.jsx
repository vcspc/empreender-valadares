import styles from '../styles/Footer.module.scss';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__container__esquerdo}>
              <div className={styles.footer__container__esquerdo__acima}>
                <img src="/logo.svg" alt="" />
                <div className={styles.footer__container__esquerdo__acima__termos}>
                  <Link style={{ textDecoration: "none", color: "inherit" }} href="https://valadaresefueta.vercel.app/termodeprivacidade">
                    <p>Termo de Privacidade</p>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "inherit" }} href="https://valadaresefueta.vercel.app/termodeuso">
                    <p>Termos de Uso</p>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "inherit" }} href="https://valadaresefueta.vercel.app/politicadecookies">
                    <p>Política de Cookies</p>
                  </Link>
                </div>
              </div>
              <ul className={styles.footer__container__esquerdo__abaixo}>
                <li>marketing jurídico</li>
                <li>escritório de advocacia</li>
                <li>mentoria jurídica</li>
                <li>advogados de sucesso</li>
                <li>empreendedorismo jurídico</li>
                <li>advogados</li>
                <li>OAB Rio de Janeiro</li>
              </ul>
            </div>
            <div className={styles.footer__container__direito}>
              <p className={styles.footer__container__direito__texto}>Siga nas redes</p>
              <div className={styles.footer__container__direito__redes}>
                <Link href="https://www.instagram.com/fernandavaladares.adv">
                  <img src="instagram.svg" alt="" />
                </Link>
                <Link href="https://www.facebook.com/fernandavaladaresadv">
                  <img src="facebook.svg" alt="" />
                </Link>
                <Link href="https://br.linkedin.com/in/fernanda-valadares-4b02a6248">
                  <img src="linkedin.svg" alt="" />
                </Link>
              </div>
              <p className={styles.footer__container__direito__texto}>Entre em contato</p>
              {/* <div className={styles.footer__container__direito__whatsapp}>
                <img src="/whatsapp.svg" alt="" />
                <p>(21) 9654-50470</p>
              </div> */}
              <div className={styles.footer__container__direito__email}>
                <img src="/email.svg" alt="" />
                <p>fernanda@valadaresefueta.com.br</p>
              </div>
              <div className={styles.footer__container__direito__localizacao}>
                <img src="/localizacao.svg" alt="" />
                <div className={styles.footer__container__direito__localizacao__texto}>
                  <p>Av. José Silva de Azevedo Neto, 200 – BL 04 – Sala 104 - O2 Corporate Barra - Barra da Tijuca - RJ, 22775-056.</p>
                </div>
              </div>
              <p className={styles.footer__container__direito__texto}>Atendemos em todo Brasil.</p>
            </div>
          </div>
          <div className={styles.footer__container__copyright}>
            <p>
              © Copyright 2024 – Todos os Direitos Reservados <span>FERNANDA VALADARES</span> Desenvolvido por <span>VIRA NEGÓCIOS</span>
            </p>
          </div>
        </footer>

    )
}