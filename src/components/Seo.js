import React from "react";
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";

/*export default function SEO2({ seo }) {
  console.log(seo);

  const data = `{
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${seo.CANONICAL}"
    },
    "headline": "${seo.TITLE}",
    "keywords": "${seo.KEYWORDS}",
    "description": "${seo.OG_DESCRIPTION}",
    "image": {
      "@type": "ImageObject",
      "url": "${seo.OG_IMAGE}",
      "height": 800,
      "width": 800
    },
    "datePublished": "${seo.OG_PUBLISHED}",
    "dateModified": "${seo.OG_PUBLISHED}",
    "author": {
      "@type": "Organization",
      "name": "Team Herald"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Google",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.heraldgoa.in/img/logo.jpg",
        "width": 281,
        "height": 74
      }
    }
  }`;

  return (
    <Helmet>
    <script type="application/ld+json">
       {data}
    </script>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />
    </Helmet>
  )
}*/

const data = (props) => {
  return (
    `{
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${props.CANONICAL}"
      },
      "headline": "${props.TITLE}",
      "keywords": "${props.KEYWORDS}",
      "description": "${props.OG_DESCRIPTION}",
      "image": {
        "@type": "ImageObject",
        "url": "${props.OG_IMAGE}",
        "height": 800,
        "width": 800
      },
      "datePublished": "${props.OG_PUBLISHED}",
      "dateModified": "${props.OG_PUBLISHED}",
      "author": {
        "@type": "Organization",
        "name": "Team Herald"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Google",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.heraldgoa.in/img/logo.jpg",
          "width": 281,
          "height": 74
        }
      }
    }`
  );
}

class SEO extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        seo: []
      };
  }

  componentWillReceiveProps(props) {
    this.state.seo = props.seo;
  };

  render() {  
    
    const ldJson = data(this.state.seo);

    return (
        <Helmet>
          <title>Herald: {(this.state.seo.TITLE)?this.state.seo.TITLE:''}</title>
          <meta name="description" content={(this.state.seo.DESC)?this.state.seo.DESC:''} />
          <meta name="keywords" content={(this.state.seo.KEYWORDS)?this.state.seo.KEYWORDS:''} />
          {this.state.seo.OG_TITLE && <meta property="og:title" content={this.state.seo.OG_TITLE} />}
          {this.state.seo.OG_TYPE && <meta property="og:type" content={this.state.seo.OG_TYPE} />}
          {this.state.seo.OG_URL && <meta property="og:url" content={this.state.seo.OG_URL} />}
          {this.state.seo.OG_SITENAME && <meta property="og:site_name" content={this.state.seo.OG_SITENAME} />}
          {this.state.seo.OG_IMAGE && <meta property="og:image" content={this.state.seo.OG_IMAGE} />}
          {this.state.seo.OG_DESCRIPTION && <meta property="og:description" content={this.state.seo.OG_DESCRIPTION} />}
          {this.state.seo.OG_PUBLISHED && <meta property="article:published_time" content={this.state.seo.OG_PUBLISHED} />}
          {this.state.seo.OG_AUTHOR && <meta property="article:author" content={this.state.seo.OG_AUTHOR} />}
          {this.state.seo.TWITTER_CARD && <meta name="twitter:card" content={this.state.seo.TWITTER_CARD} />}
          {this.state.seo.TWITTER_SITE && <meta name="twitter:site" content={this.state.seo.TWITTER_SITE} />}
          {this.state.seo.TWITTER_TITLE && <meta name="twitter:title" content={this.state.seo.TWITTER_TITLE} />}
          {this.state.seo.TWITTER_DESCRIPTION && <meta name="twitter:description" content={this.state.seo.TWITTER_DESCRIPTION} />}
          {this.state.seo.CANONICAL && <link rel="canonical" href={this.state.seo.CANONICAL} />}
          {ldJson && <script type="application/ld+json">{ldJson}</script>}
        </Helmet>
    );
  }
}

export default SEO;