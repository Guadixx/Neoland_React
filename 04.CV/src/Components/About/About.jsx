import "./About.css"
const About = ({aboutMe}) => {
    return (<div>
        <div className="experience card">
          {aboutMe.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="info">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>)
}

export default About;