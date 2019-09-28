import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RightSide from './RightSide';

class AboutUsPage extends React.Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() { 
        return (
            <div className="news-content" id="citizen-page">
                <div className="container">
                    <div className="col-9">
                        <div className="newsletter-box static-content">
                            <div className="tag-inner">About US</div>
                            <p> <strong>Herald Group is Goa’s most diversified media house and poised to grow exponentially with the following brands:</strong></p>
                            <ul className="list">
                            <li><p> <strong>Herald, Goa’s oldest newspaper,</strong> is today also by far the largest-selling daily English newspaper in the State (ABC Circulation of 64,089) and the most widely read (IRS Readership of 1,46,000) with a reputation for being fiercely independent. Established as a Portuguese language newspaper in the year 1900, its English avatar took birth in 1983. In a media space dominated by mining interests, paid news templates and “closeness” with political parties, Herald ~ whose only interest is the public interest ~ is the paper people trust.<br />
                                The accuracy of our news reports, all the views that matter, in-depth reportage on the issues of the day and our award-winning investigations combine to ensure that Herald sets the news agenda for Goa every morning. Our readership encompasses the entire spectrum of Goans, as the numbers put out by reputed industry bodies such as ABC and IRS validate, from the common man to the decision-maker.<br />
                                In a line, Herald is Goa.</p></li>
                            <li><p><strong>Dainik Herald,</strong> the daily Marathi newspaper from the Herald Group launched in 2012, has in a short span of time become the choice of decision-makers and the emerging Marathi-reading middle class in Goa. Dainik Herald has established its credibility and has emerged as a significant voice that nobody with a stake in Goa can afford to ignore.With innovative editorial features and attention to detail and quality previously not seen in regional language newspapers in the State, Dainik Herald is also the first full-colour Marathi daily in Goa. Indeed, we wouldn’t be immodest in saying this new kid on the block has already carved out a niche for itself.Dainik Herald is the latest torchbearer of the Group Motto ~ all the news and views without fear or favour. The buzz is that our impact on the Marathi reader has been immediate.
                                And this is just the beginning. </p></li>
                            <li><p><strong>Amcho Avaz,</strong> our recently launched Konkani weekly, is, quite simply, the people’s newspaper in the people’s language.The weekly fills a longstanding demand for a contemporary Konkani newspaper in the roman script with vibrant content ~ news, analysis and features ~ that’s comparable in style and substance to its other regional language contemporaries.Amcho Avaz is on course, through an innovative subscription model, for high penetration among the Goan masses that deeply value and cherish their language, Konkani, and the cultural idiom it represents. Market feedback has been that the weekly Konkani paper is a perfect package with the Herald. </p></li>
                            <li><p> <strong>HCN (Herald Cable Network),</strong> the Herald Group's news and general entertainment channel launched in a small way in 2007, is today poised to become the clutter-breaker in Goa's television scene. With a fresh approach towards the issues of the day and a content package which is relevant for the Goan audience, HCN stands out for the direct, citizens-first emphasis in its news and current affairs coverage. HCN's entertainment programming including innovative game show formats such as Housie as well as special features on art &amp; culture, lifestyle, fashion and homes which have developed a dedicated following. Interactive, relevant, credible ~ HCN, we believe, is the future of television in Goa. </p></li>
                            <li><p> <strong>Website/E-paper</strong> Our website www.heraldgoa.in and e-paper is the first port of call for the Goan diaspora across the world as well as for tourists and business visitors to the State. From the UK to Canada, the Gulf and Australia, not to mention other parts of India, Goans keep in touch and keep up with Goa through the online newspaper they trust. </p></li>
                            <li><p><strong>Junior Herald</strong> is a weekly newspaper, produced according to the best standards Herald is known for, meant exclusively for very young to young children, written and produced for them in a language they understand. It breaks away from the clutter of the buzz of images and text they get online and serves as a paper which is old school and yet fresh. It takes its readers to the simple times, when children put pen or pencils to paper to draw, colour, write, solve puzzles and above all, create.<br />
                                <br />
                                Junior Herald takes its inspiration of giving value added information to its young readers from its seasoned parent Herald, and infuses its own vivacity and robustness and endearing curiosity, which is the hallmark of every child. Junior Herald is for children, of children and largely, by children. With every subsequent edition, it inculcates the reading habit in children and also engages them through books and paper, in the endearing old fashioned way. </p></li>
                            </ul>
                            <p><strong>Our easy-to-use, high-resolution website/e-paper get nearly 24,00,000 hits each day.</strong></p>
                            <p><strong>Need we say more?</strong></p>
                        </div>
                    </div>
                    <div className="col-3" >
                        <RightSide/>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};

export default AboutUsPage;