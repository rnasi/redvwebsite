import React from "react"
import content from "../../public/images/content/hero.yaml"

export default () => (
  <section id="hero">
    <div className="row">
      <div className="twelve columns">

        <div className="hero-text">
          <h1 className="responsive-headline">{ content.headline }</h1>
          <p>{ content.body }</p>
        </div>

        <div className="hero-image">
          <img src={ content.image } alt="" className="animated fadeInUpBig" />
        </div>
      </div>
    </div>
  </section>
)
