import "~/styles/about.css"

export default function About() {
  return (
    <main className="about">
      <div className="about__bio">
        <p>
          Diz Harford (1931–2016) was an Australian-born painter, etcher and sculptor who lived and
          worked in India, Greece and Ireland before settling in London in 1969. Her experience
          across these places shaped a practice attentive to movement, displacement and the
          emotional textures of place.
        </p>

        <p>
          Trained in Australia, she established her career in Ireland in the late 1960s, developing
          her major Ulysses series - several works from which were acquired by the University of
          Cork - and beginning her first sustained period of studio and exhibition activity. After
          moving to London, she continued painting while making regular trips back to Australia.
        </p>

        <p>
          Harford took inspiration from literature and music, including James Joyce, Federico García
          Lorca, Oscar Wilde and Billie Holiday, as well as strong ethical and political
          commitments, from opposition to apartheid to support for Aboriginal land rights. These
          influences informed the figuration, sensibility and performative charge of her work, which
          is marked by a quiet intensity and a raw, personal edge. She exhibited in Dublin, Belfast,
          London and New York, and her work is held in private collections internationally.
        </p>
      </div>
      <img className="about__img" src="/assets/diz.webp"></img>
    </main>
  )
}
