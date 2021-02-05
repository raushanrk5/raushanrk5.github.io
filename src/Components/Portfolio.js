import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.img;
        return( 
        <div key={projects.title} className="padding-column rounded col-lg-4 col-md-6 columns portfolio-item">
           {/* <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.desc}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div> */}

          <div className="frontside">
              <div className="card">
                  <div className="card-body text-center">
                      <p><img className=" img-fluid" src={projectImage} alt="card image" /></p>
                      <h4 className="card-title">{projects.title}</h4>
                      <p className="card-text">{projects.desc}</p>
                      <a href={projects.url}  className="link-icon"><i className="fa fa-link fa-2x"></i></a>
                  </div>
              </div>
          </div>
        </div>
        )
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
