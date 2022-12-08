var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <main className="section-aboutus">
          <section className="container-aboutus">
            <h2 className="title-aboutus">Mision</h2>
            <p className="text-aboutus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde perspiciatis
              laudantium doloribus odio accusamus quibusdam vel in voluptatum corrupti.</p>
            <img text="flecha" src alt="" />
          </section>
          <section className="container-aboutus">
            <h2 className="title-aboutus">Vision</h2>
            <p className="text-aboutus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde perspiciatis
              laudantium doloribus odio accusamus quibusdam vel in voluptatum corrupti.</p>
            <img text="flecha" src alt="" />
          </section>
        </main>
        <main className="section-contact">
          <section className="contact-net">
            <section className="contact-circle">
              <section className="contact-linker" />
              <section className="contact-linker" />
              <section className="contact-linker" />
              <section className="contact-linker" />
            </section>
            <button className="linker-email"><a href="#" /></button>
          </section>
          <section className="contact-creators">
            <h4>2022</h4>
            <h4> | Yeison Arcila | Kevin Jaramillo</h4>
          </section>
        </main>
      </div>
    );
  }
});