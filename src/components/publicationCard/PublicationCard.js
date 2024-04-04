import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./PublicationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function PublicationCard({publication}) {

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
                        __html: publication.authors.map(author => 
                            author === "Abu Bakor Hayat Arnob" 
                                ? `<b>${author}*</b>` 
                                : author
                        ).join(', ')
                    }}
                />
                <p
                    className={`${isDark ? "dark-mode" : ""} publication-text-duration`}
                    >
                    {publication.arxivId ? ` (arXiv ID: ${publication.arxivId})` : ''}
                </p>
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
                {publication.year}
              </p>
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
