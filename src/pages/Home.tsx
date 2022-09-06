import logoIcb from '../assets/images/logo.svg'
import backgroundImg from '../assets/images/background-logo.svg'

import '../styles/home.scss'

export function Home() {
    return (
        <div id="home-page">
            <aside>
                <img src={logoIcb} alt="Logo ICB"/>
                <strong>Igreja de Cristo em Brasília</strong>
                <p>Uma família que ama você</p>
            </aside>
            <main className="main-content">
                <div>
                    <img src={backgroundImg} alt="Igreja de Cristo"/>
                </div>
            </main>
        </div>
    )
}
