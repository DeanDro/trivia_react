/*
    Create meta tags for search engines and social networks
    sharing. 
*/

function MetaTags(){
    return (
        <head>
            <title>Games of Chance: Trivia Quiz</title>
            <meta name="title" content="Games of Chance Trivia"/>
            <meta name="description" content="An online trivia questions game based on the 
            book games of chance by author Raquel Drosos"/>
            <meta name="author" content="Konstantinos Drosos"/>
            <meta name="language" content="english"/>
            <meta name="robots" content="index"/>
            <meta name="googlebot" content="notranslate"/>
            <meta name="rating" content="safe for kids"/>
            <meta name="revised" content="Thursday, August 17th, 2023"/>
            <meta name="copyright" content="Copyright 2023"/>
            <meta httpEquiv="content-type" content="text/html"/>
            <meta httpEquiv="default-style"/>
            <meta httpEquiv="Content-language" content="english"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="Games of Chance Quiz" />
            <meta property="og:type" content="text/html" />
            <meta property="og:description" content="A trivia game"/>
            <meta property="og:url" content="https://www.raqueldrosos.com/trivia" />
            <meta property="og:image" content="https://m.media-amazon.com/images/I/61GHyFMKT5L._AC_UF1000,1000_QL80_.jpg" />
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        </head>
    );
}

export default MetaTags;