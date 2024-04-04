import React from "react";
import "./Publication.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationInfo} from "../../portfolio";

export default function Publications() {
    if (publicationInfo.display) {
        return (
            <div className="publications-section" id="publications">
                <h1 className="publications-heading">Publications</h1>
                <div className="publications-card-container">
                    {publicationInfo.publications.map((publication, index) => (
                        <PublicationCard key={index} publication={publication} />
                    ))}
                </div>
            </div>
        );
    }
    return null;
}
