import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RightSide from './RightSide';

class AboutUsPage extends React.Component {

    render() { 
        return (
            <div className="news-content" id="citizen-page">
                <div className="container">
                    <div className="col-9">
                    <div className="newsletter-box static-content"> 
                        <div className="tag-inner">Privacy Policy</div>
                            <p>The Privacy Policy (hereinafter “the policy”) provided below is with respect to our use and protection of any personal information you provide to us through the http://www.heraldgoa.in website.</p>
                        <p>Herald Publications Pvt. Ltd. is the sole owner of the website http://www.heraldgoa.in (hereinafter “website”). The Policy is applicable to the website.</p>
                        <p>You may be required to provide personally identifiable information at several different points on our website. By accepting the policy at the time of registration, you expressly approve and consent to our collection, storage, use and disclosure of your personal information as described in this Policy.</p>
                        <p><strong>Information Collection: </strong> <br />
                        You can visit/surf our website without providing any personal information. However, if you choose to avail of certain services on our website, you shall be required to provide certain information for the registration and/or access to such services/web pages. Such information may include, without limitation, your name, user id, password, email address, contact address, mobile/telephone number(s), gender, age, occupation, professional details, interests, financial information, income, content, IP address, standard web log information and such other information as may be required for your interaction with the services.</p>
                        <p><strong>Use:</strong><br />
                        If you choose to provide us with the abovementioned information, you consent to the use, transfer and storage of the information so provided by you on our servers. The information provided by you shall not be sold/given/rented to third parties (third parties for this purpose do not include our group / holding / subsidiary companies and or our service partners / associates) for marketing purposes and other related activities without your prior consent.</p>
                        <p className="no-margin"><strong>The information provided by you shall be used by us to:</strong></p><br />
                        <ul className="list">
                            <li>Improve our website and enable us to provide you the most user-friendly experience which is safe, smooth and customized;</li>
                            <li>Improve and customize our services, content and other commercial /non - commercial features on the website;</li>
                            <li>Send you information on our products, services, special deals, promotions;</li>
                            <li>Send you marketing/promotional communications (If you do not wish to receive such marketing/promotional communications from us you may indicate your preferences at the time of registration or by following the instructions provided on the website or by providing instructions to this effect);</li>
                            <li>Send newsletter(s) to you (Provided you subscribe to the same);</li>
                            <li>Send you service-related announcements on rare occasions when it is necessary to do so;</li>
                            <li>Send you e-mail or other communications regarding updates at the website and information about job opportunities and additional job postings in our Company and/or group/holding / subsidiary companies. The nature and frequency of these e-mails will vary depending upon the information we have about you.</li>
                            <li>Provide you the opportunity to participate in contests or surveys on our website (If you participate, we may request certain additional personally identifiable information from you. Moreover, participation in these surveys or contests is shall be completely voluntary and you therefore shall have a choice whether or not to disclose such additional information);</li>
                            <li>Provide customer support and the services you request;</li>
                            <li>Resolve disputes, if any and troubleshooting;</li>
                            <li>Avoid/check illegal and/or potentially prohibited activities and to enforce Agreements ;</li>
                            <li>Provide service updates and promotional offers related to our services/products.</li>
                            <li>Comply with any court judgment / decree / order / directive / legal & government authority /applicable law;</li>
                            <li>Investigate potential violations or applicable national & international laws;</li>
                            <li>Investigate deliberate damage to the website/services or its legitimate operation;</li>
                            <li>Detect, prevent, or otherwise address security and/or technical issues;</li>
                            <li>Protect the rights, property or safety of Herald Publications Pvt. Ltd. and/or its Directors, employees and the general public at large; and</li>
                            <li>Respond to Claims of third parties;</li>
                        </ul>
                        <p className="no-margin"><strong>The personal information provided by you shall also be disclosed to:</strong></p><br />
                            <ul className="list">
                                <li>The members of our corporate family, affiliates, service providers and third parties under a contract to provide joint services, contents and marketing communications; and</li>
                                <li>Other third parties to whom you explicitly require us to send the information;</li>
                            </ul>
                        <p>When providing information which may be required for your interaction/use of the services, you should be careful about the information you submit for use of services. We shall not be responsible for any errors arising out of incorrect or incomplete submissions. Also we will not be responsible in any way for failure of any backend technology and/or your resultant inability to submit information. Moreover, you shall be responsible for the information you provide for use of the Service(s), for any entries that you submit, or for copyright/third party violations and for any consequences arising thereof.</p>
                        <p>If you choose to use our referral service to tell a friend about our website, we will ask you for your friend's name and email address. We will automatically send your friend an email inviting him or her to visit the website. However, your friend may contact us to request that he does not require such services/content/email or we remove the information related to him from our database.</p>
                        <p>Based upon the personally identifiable information you provide us, we will send you a welcoming email to verify your username and password. We will also communicate with you in response to your inquiries with respect to our services/content, to provide the services you request, and to manage your account. We will communicate with you by email or telephone, in accordance with your wishes.</p>
                        <p>In order to provide certain services to you, we may on occasion supplement the personal information you submitted to us with information from third party sources (third parties for this purpose may include our group / holding / subsidiary companies and or our service partners / associates).</p>
                        <p>We reserve the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order, or legal process served on our website.</p>
                        <p><strong>Cookies:</strong> <br />
                        We use cookies on the website but do not link the information we store in cookies to any personally identifiable information you submit while on our website. We do not set cookies to store your passwords. If you reject cookies, you will still use our website.</p>
                        <p>We have no access to or control over third party cookies and we don't store any cookies and just use the facility of .net framework for page output cache. This privacy statement does not cover the use of cookies by any advertisers.</p>
                        <p>For web and mweb:<Link to="https://www.colombiaonline.com/privacy-policy" target="_blank">https://www.colombiaonline.com/privacy-policy</Link></p>
                        <p>For iOS and Android App: <Link to="https://www.colombiaonline.com/privacy-policy?app=1" target="_blank">https://www.colombiaonline.com/privacy-policy?app=1</Link></p>
                        <p><strong>Changing Your Personal Information: </strong><br />
                        You can access and modify your personal information by signing on to the website. We will not modify the information provided by you. However, you must update your personal information as soon as such changes are necessitated.</p>
                        <p>Where you make a public posting, you may not be able to change or remove it nor shall you be able to close your account. Upon your request, we will close your account and remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law(s). However, we will retain your personal information from closed accounts to comply with law, Avoid/check illegal and/or potentially prohibited activities and to enforce User Agreements; Comply with any court judgment / decree / order / directive / legal & government authority /applicable law; Investigate potential violations or applicable national & international laws; Investigate deliberate damage to the website/services or its legitimate operation; Detect, prevent, or otherwise address security and/or technical issues; Protect the rights, property or safety of Herald Publications Pvt. Ltd. and/or its Directors, employees and the general public at large; Respond to Claims of third parties; and take such other actions as may be permitted by law.</p>
                        <p><strong>Account Protection: </strong><br />
                        Your password is the key to your account. You shall be solely responsible for all the activities happening under your username and you shall be solely responsible for keeping your password secure. Do not disclose your password to anyone. If you share your password or your personal information with others, you shall be solely responsible for all actions taken under your username and you may lose substantial control over your personal information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately change your password.</p>
                        <p><strong>Business Transaction: </strong><br />
                        In the event Herald Publications Pvt. Ltd. goes through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personally identifiable information will likely be among the assets transferred. Where your information is transferred you will be notified via email/prominent notice on our website for 30 days of any such change in ownership or control of your personal information.</p>
                        <p><strong>Security: </strong><br />
                        The security of your personal information is important to us. When you enter your personal information we treat the data as an asset that must be protected and use tools (encryption, passwords, physical security, etc.) to protect your personal information against unauthorized access and disclosure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure, therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security nor can we guarantee that third parties shall not unlawfully intercept or access transmissions or private communications, and that other users may abuse or misuse your personal information that you provide. Therefore, although we work hard to protect your information, we do not promise, and you should not expect, that your personal information or private communications will always remain private.</p>
                        <p><strong>Links to Other Sites: </strong><br />
                        The website contains links to other sites that are not owned or controlled by Herald Publications Pvt. Ltd. Please be aware that we, Herald Publications Pvt. Ltd. and/or the website, are not responsible for the privacy practices of such other sites.</p>
                        <p>We encourage you to be aware when you leave our site and to read the privacy statements of each and every Web site that collects personally identifiable information.</p>
                        <p>This privacy statement applies only to information collected by the website or to our other related websites provided it appears at the footer of the page therein. It does not apply to third party advertisements which appear on our websites and we suggest you read the privacy statements of such advertisers.</p>
                        <p><strong>Changes in this Privacy Statement: </strong><br />
                        If we decide to change our privacy policy, we will post those changes to this privacy statement and such other places we deem appropriate so that you are updated about the manner we collect information, what information we collect, how we use it and under what circumstances, if any, we disclose it.
                        We reserve the right to modify this privacy statement at any time, so please review it frequently at <Link to="http://www.heraldgoa.in/">www.heraldgoa.in/</Link> </p>
                        <p><strong>Contact Us:</strong><br />
                        If you have any questions or suggestions regarding our privacy policy, please contact us at: <br />
                        Website: <Link to="http://www.heraldgoa.in/">www.heraldgoa.in/</Link> <br />
                        Email: mail@herald-goa.com, editor@herald-goa.com<br />
                        Phone: 0091-832-2224202, 2224460, 2228083 </p>
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