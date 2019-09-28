import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const AdvertisementPage = () => (
    <div className="news-content" id="adver-page">
        <div className="container">
            <div className="ad-box">
                <div className="tag-inner">Advertisement</div>
                <div className="classified"> 
                    <Link to="/">
                        <img src="/img/online.jpg" className="ad-img" />
                    </Link> 
                </div>
                <div className="clearfix"></div>
                <table id="rate-card">
                    <tbody>
                        <tr>
                            <td align="left"></td>
                            <td colSpan="2" align="center"><img src="/img/herald-logo.jpg" alt="" /></td>
                            <td colSpan="2" align="center"><img src="/img/dainik-logo.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th align="left">Ad Category </th>
                            <th align="center">B &amp; W</th>
                            <th align="center"><img src="/img/color1.png" alt="" /></th>
                            <th align="center">B &amp; W</th>
                            <th align="center"><img src="/img/color1.png" alt="" /></th>
                        </tr>
                        <tr>
                            <td align="left">Display </td>
                            <td className="light">Rs. 150</td>
                            <td className="light">Rs. 300</td>
                            <td align="center">Rs. 125</td>
                            <td align="center">Rs. 250</td>
                        </tr>
                        <tr>
                            <td align="left">Appointment </td>
                            <td className="light">Rs. 160</td>
                            <td className="light">Rs. 320</td>
                            <td align="center">Rs. 100</td>
                            <td align="center">Rs. 200</td>
                        </tr>
                        <tr>
                            <td align="left">Classified Display </td>
                            <td className="light">Rs. 150</td>
                            <td className="light">Rs. 300</td>
                            <td align="center">Rs. 125</td>
                            <td align="center">Rs. 250</td>
                        </tr>
                        <tr>
                            <td align="left">Notice </td>
                            <td className="light">Rs. 170</td>
                            <td className="light">Rs. 340</td>
                            <td align="center">Rs. 120</td>
                            <td align="center">Rs. 240</td>
                        </tr>
                        <tr>
                            <td align="left">Entertainment </td>
                            <td className="light">Rs. 125</td>
                            <td className="light">Rs. 250</td>
                            <td align="center">Rs. 80</td>
                            <td align="center">Rs. 160</td>
                        </tr>
                        <tr>
                            <td align="left">Election &amp; Political </td>
                            <td className="light">Rs. 200</td>
                            <td className="light">Rs. 400</td>
                            <td align="center">Rs. 150</td>
                            <td align="center">Rs. 300</td>
                        </tr>
                        <tr>
                            <td colSpan="5">&nbsp;</td>
                        </tr>
                        <tr>
                            <th align="left" colSpan="5" >Running Classified: </th>
                        </tr>
                        <tr>
                            <td align="left">For first 20 words </td>
                            <td className="light"  colSpan="2" >Rs. 300</td>
                            <td align="center"  colSpan="2" >Rs. 200</td>
                        </tr>
                        <tr>
                            <td align="left">Each additional Word <span>(Maximum 50 words accepted)</span></td>
                            <td className="light" colSpan="2" >Rs. 15</td>
                            <td align="center" colSpan="2" >Rs. 10</td>
                        </tr>
                        <tr>
                            <td colSpan="5">&nbsp;</td>
                        </tr>
                        <tr>
                            <th align="left" colSpan="5" >Premiums </th>
                        </tr>
                        <tr>
                            <td align="left">Front Page </td>
                            <td className="light" colSpan="2" >100%</td>
                            <td align="center" colSpan="2" >60%</td>
                        </tr>
                        <tr>
                            <td align="left">Back Page </td>
                            <td className="light" colSpan="2" >50%</td>
                            <td align="center" colSpan="2" >30%</td>
                        </tr>
                        <tr>
                            <td align="left">Page-3 </td>
                            <td className="light" colSpan="2" >50%</td>
                            <td align="center" colSpan="2" >30%</td>
                        </tr>
                        <tr>
                            <td align="left">Specified Page </td>
                            <td className="light"  colSpan="2" >35%</td>
                            <td align="center" colSpan="2" >20%</td>
                        </tr>
                        <tr>
                            <td align="left">Specified Position </td>
                            <td className="light"  colSpan="2" >35%</td>
                            <td align="center" colSpan="2" >20%</td>
                        </tr>
                        <tr>
                            <td colSpan="5">&nbsp;</td>
                        </tr>
                        <tr>
                            <th align="left" >Standard Sizes </th>
                            <th align="center" colSpan="2" >Width x Height </th>
                            <th align="center" colSpan="2" >Area</th>
                        </tr>
                        <tr>
                            <td align="left">Full Page </td>
                            <td  className="light"  colSpan="2" >32.9 cm x 52.5 cm</td>
                            <td align="center" colSpan="2" >1727 sq cm</td>
                        </tr>
                        <tr>
                            <td align="left">Half Page </td>
                            <td  className="light"  colSpan="2" >32.9 cm x 25 cm</td>
                            <td align="center" colSpan="2" >823 sq cm</td>
                        </tr>
                        <tr>
                            <td align="left">Quarter Page </td>
                            <td  className="light"  colSpan="2" >16 cm x 25 cm</td>
                            <td align="center" colSpan="2" >400 sq cm</td>
                        </tr>
                        <tr>
                            <td align="left">Skybus Strip </td>
                            <td  className="light"  colSpan="2" >32.9 cm x 5 cm</td>
                            <td align="center" colSpan="2" >165 sq cm</td>
                        </tr>
                        <tr>
                            <td colSpan="5">&nbsp;</td>
                        </tr>
                        <tr>
                            <th align="left" >Front Page Min. Sizes: </th>
                            <th align="center" colSpan="2" >Width x Height </th>
                            <th align="center" colSpan="2" >Area</th>
                        </tr>
                        <tr>
                            <td align="left">Display </td>
                            <td  className="light"  colSpan="2" >12 cm x 15 cm</td>
                            <td align="center" colSpan="2" >180 sq cm</td>
                        </tr>
                        <tr>
                            <td align="left">Pointers </td>
                            <td  className="light"  colSpan="2" >4 cm x 5 cm</td>
                            <td align="center" colSpan="2" >20 sq cm</td>
                        </tr>
                        <tr>
                            <td align="left">Skybus Strip </td>
                            <td  className="light"  colSpan="2" >32.9 cm x 5 cm</td>
                            <td align="center" colSpan="2" >165 sq cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default AdvertisementPage;