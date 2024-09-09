export default function Home() {
    return (
        <div className="container space-y-8">
            <div>
                <h1 className="text-3xl font-geist font-bold">Hi, I am David</h1>
                <span
                    className="text-slate-400 italic">Höck, alternatively Hoeck or Hock (annoying German letters)</span>
            </div>
            <div className="prose max-w-none">
                <p>
                    I am an entrepreneur, software engineer, mechatronics engineer and very passionate about anything in
                    technology.
                </p>
                <p>
                    I founded <a href="https://alpin11.com" target="_blank">ALPIN11</a>, a digital agency focused on
                    building digital commerce platforms for large enterprises across Europe.
                    Later I co-founded <a href="https://vendure.io" target="_blank">Vendure</a> together with Michael
                    Bromley, an open-source headless commerce platforms focused in customization and developer
                    experience. I am currently the CEO at both companies.
                </p>
                <p>You can find me either in Vienna or Kitzbühel 🇦🇹</p>
            </div>
        </div>
    );
}
