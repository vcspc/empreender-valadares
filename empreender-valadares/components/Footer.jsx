import styles from '../styles/Footer.module.scss';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__container__esquerdo}>
              <div className={styles.footer__container__esquerdo__acima}>
                <img src="/logo_branco.svg" alt="" />
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
                <li>serviços jurídicos para empresas</li>
                <li>assessoria jurídica para agências de publicidade</li>
                <li>serviços jurídicos para e-commerce</li>
                <li>advogado para agências de publicidade</li>
                <li>materiais jurídicos para agências de marketing</li>
                <li>direito empresarial</li>
                <li>direito digital</li>
                <li>marketing digital</li>
              </ul>
            </div>
            <div className={styles.footer__container__direito}>
              <p className={styles.footer__container__direito__texto}>Siga nas redes</p>
              <div className={styles.footer__container__direito__redes}>
                <Link href="https://www.instagram.com/valadaresefueta.adv?igsh=MmZhZmx5b2Nibnly">
                  <img src="instagram.svg" alt="" />
                </Link>
                <Link href="https://www.facebook.com/ValadareseFueta?mibextid=ZbWKwL">
                  <img src="facebook.svg" alt="" />
                </Link>
                <Link href="https://www.linkedin.com/company/valadares-e-fueta-advogados/">
                  <img src="linkedin.svg" alt="" />
                </Link>
              </div>
              <p className={styles.footer__container__direito__texto}>Entre em contato</p>
              <div className={styles.footer__container__direito__whatsapp}>
                <img src="/whatsapp.svg" alt="" />
                <p>(21) 9654-50470</p>
              </div>
              <div className={styles.footer__container__direito__email}>
                <img src="/email.svg" alt="" />
                <p>contato@valadaresefueta.com.br</p>
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
              © Copyright 2024 – Todos os Direitos Reservados <span>VALADARES E FUETA ADVOGADOS</span> Desenvolvido por <span>VIRA NEGÓCIOS</span>
            </p>
          </div>
        </footer>

    )
}