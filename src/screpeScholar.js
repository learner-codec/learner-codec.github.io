import axios from 'axios';

async function getProfileInfo(authorId) {
    try {
        const response = await axios.get(`https://api.semanticscholar.org/graph/v1/author/${authorId}/papers`, {
            params: {
                fields: 'url,year,authors,title,publicationVenue,externalIds,publicationTypes,openAccessPdf,journal',
                limit: 2
            }
        });
        console.log(response);
        const publications = response.data.data.map(paper => {
            const authors = paper.authors ? paper.authors.map(author => author.name) : [];
            return {
                title: paper.title,
                abstract: paper.abstract,
                year: paper.year,
                authors: authors,
                url: paper.url,
                doi: paper.externalIds.DOI,
                arxivId: paper.externalIds.ArXiv
            };
        });

        // Sort the publications based on their publication year in descending order
        publications.sort((a, b) => b.year - a.year);

        const publicationInfo = {
            publications: publications
        };
        console.log("=============")
        console.log(publicationInfo);
        return publicationInfo;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

export{ getProfileInfo};
