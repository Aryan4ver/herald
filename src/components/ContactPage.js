import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Notifications from './Notifications';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Notifications: false };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let err = 0;

        const name = $('#txtname').val().trim();
        if(name=='')
        {
            err++;
            $('#txtname').addClass('err-inputbox');
        }
        else
            $('#txtname').removeClass('err-inputbox');

        const email = $('#txtemail').val().trim();
        if(email=='')
        {
            err++;
            $('#txtemail').addClass('err-inputbox');
        }
        else
            $('#txtemail').removeClass('err-inputbox');
    
        const contactno = $('#txtcontact').val().trim();
        if(contactno=='')
        {
            err++;
            $('#txtcontact').addClass('err-inputbox');
        }
        else
            $('#txtcontact').removeClass('err-inputbox');
    
        const city = $('#txtcity').val().trim();
        if(city=='')
        {
            err++;
            $('#txtcity').addClass('err-inputbox');
        }
        else
            $('#txtcity').removeClass('err-inputbox');

        const message = $('#txtmessage').val().trim();
        if(message=='')
        {
            err++;
            $('#txtmessage').addClass('err-inputbox');
        }
        else
            $('#txtmessage').removeClass('err-inputbox');

        if(err==0)
        {
            $('#SUBMIT').hide();
            $('#SPINNER').show();

            const method = "POST";
            const body = new FormData(this.form);
            var that = this;
            fetch("https://www.heraldgoa.in/api/sendmail.php", { method, body })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                $('#SPINNER').hide();
                $('#SUBMIT').show();
                $('#txtname').val('');
                $('#txtemail').val('');
                $('#txtcontact').val('');
                $('#txtcity').val('');
                $('#txtmessage').val('');
                that.setState({ Notifications: 'success' });
            });
        }
    }

    render() { 
        return (
            <div className="news-content" id="contact-page">
                <div className="container">
                    <div className="col-9">
                        <div className="contact-box">
                            <div class="tag-inner">Contact Us</div>
                            <div className="box">
                                <div className="contact-content">
                                    <h3>POSTAL ADDRESS:</h3>
                                    <p>HERALD PUBLICATIONS PVT LIMITED <br />
                                    AF1-AF5 - Campal Trade Center,<br /> Opp Taj Vivanta,<br />
                                    Behind Military Hospital<br /> St Inez Panjim Goa-403001 </p>
                                </div>
                                <div className="contact-content">
                                    <h3>Online</h3>
                                    <p>online@herald-goa.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Editorial</h3>
                                    <p>mail@herald-goa.com / desk@herald-goa.com / editor@herald-goa.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Amcho Avaz</h3>
                                    <p>0832-2224460</p>
                                    <p>sompadpi@herald-goa.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Dainik</h3>
                                    <p>0832-2221355</p>
                                    <p>news@dainikherald.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Circulation</h3>
                                    <p>0832-6718 516 / 500</p>
                                    <p>circulation@herald-goa.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Sales</h3>
                                    <p>0832-6718 516 / 500</p>
                                    <p>sales@herald-goa.com</p>
                                </div>
                                <div className="contact-content">
                                    <h3>Advertisement</h3>
                                    <p> +91 9763718546 / 2224202 / 0832-6718 516 / 500</p>
                                    <p>Fax: +91-832-2225 622</p>
                                    <p>advt@herald-goa.com</p>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="right-form">
                            <form className="contact-form" id="contactForm" ref={el => (this.form = el)} onSubmit={this.handleSubmit}>
                                <h3>GET IN TOUCH WITH US { this.state.Notifications }</h3>
                                <input type="text" className="inputbox" name="txtname" id="txtname" placeholder="Name :" required />
                                <input type="email" className="inputbox" name="txtemail" id="txtemail" placeholder="Email :" required />
                                <input type="text" className="inputbox" name="txtcontact" id="txtcontact" placeholder="Contact No. :" required />
                                <input type="text" className="inputbox" name="txtcity" id="txtcity" placeholder="City/Region :" required />
                                <textarea rows="3" className="inputbox" placeholder="Message:" name="txtmessage" id="txtmessage" required ></textarea>
                                <button className="submit-btn" type="submit" id="SUBMIT" style={{display:'block'}}><span>SUBMIT</span></button> {/* onClick={() => this.send(this.form)}*/ }
                                <button className="submit-btn" id="SPINNER" style={{display:'none'}}><FontAwesome name="spinner fa-spin"></FontAwesome></button>
                                <div className="clear"></div>
                            </form>
                            <Notifications type={this.state.Notifications} />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};

export default ContactPage;