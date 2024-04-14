import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./PublicationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function PublicationCard({publication}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="publication-card">
          <div className="education-card-right">
            <h5 className="education-text-school">{publication.title}</h5>

            <div className="education-text-details">
                <p className={`${isDark ? "dark-mode" : ""} publication-text-duration`}
                    dangerouslySetInnerHTML={{
                        __html: publication.authors.map(authors => 
                            authors === "Abu Bakor Hayat Arnob" 
                                ? `<strong>${authors}</strong>` 
                                : authors
                        ).join(', ')
                    }}
                />

                <p
                    className={`${isDark ? "dark-mode" : ""} publication-text-duration`}
                    >
                    {publication.doi ? ` (DOI: ${publication.doi})` : ''}
                </p>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } publication-text-duration`}
              >
                {`${publication.journal} year: ${publication.year}`}
              </p>
              <div className="publication-card-footer">
                {publication.footerLink.map((v, i) => {
                    if (v.name === 'code' && v.url === '') {
                      return null;
                    }
                    else if (v.name === "paper" && v.url === ''){
                      return null;
                    }
                    else if (v.name === "abstract" && v.url === ''){
                      return null;
                    }
                    return (
                      <span
                        key={i}
                        className={
                          isDark ? "publication-tag" : "publication-tag"
                        }
                        onClick={() => openUrlInNewTab(v.url, v.name)}
                      >
                        {v.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="publication-card-border"></div>
      </Slide>
    </div>
  );
}
