import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RightSide from './RightSide';

class SubscribeNewsletterPage extends React.Component {
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

        const time = $('#cmbtime').val().trim();
        if(time=='')
        {
            err++;
            $('#cmbtime').addClass('err-dropdown');
        }
        else
            $('#cmbtime').removeClass('err-dropdown');
                
        if(err==0)
        {
            const method = "POST";
          const body = new FormData(this.form);
            var that = this;
            fetch("https://www.heraldgoa.in/api/subscribenewslettermail.php", { method, body })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                alert(result.mail_status);
                $('#txtname').val('');
                $('#txtemail').val('');
                $('#cmbtime').val('');
              that.setState({ Notifications: 'success' });
          });
        }
    }

    handleFileUpload = () => {
        const uploadButton = document.querySelector('.browse-btn');
		const fileInfo = document.querySelector('.file-info');
		const realInput = document.getElementById('real-input');

		uploadButton.addEventListener('click', (e) => {
		  realInput.click();
		});

		realInput.addEventListener('change', () => {
		  const name = realInput.value.split(/\\|\//).pop();
		  const truncated = name.length > 20 
			? name.substr(name.length - 20) 
			: name;
		  
		  fileInfo.innerHTML = truncated;
		});
    }

    render() { 
        return (
            <div className="news-content" id="newsletter-page">
                <div className="container">
                    <div className="col-9">
                        <div className="newsletter-box">
                            <div className="tag-inner">Subscribe Newsletter</div>
                            <p>It is our endeavour to be the beginning of your every day! At 7am in the morning, at your local time, you will receive a round up of the tops stories that appear in our daily today. Simply leave us your name and email, let us know what is your time zone, so that you receive oHeraldo, bright and early in the morning, in your inbox!</p>
                            <form className="contact-form" ref={el => (this.form = el)} onSubmit={this.handleSubmit}>
                                <input type="text" className="inputbox reset" name="txtname" id="txtname" placeholder="Name :" required />
                                <input type="email" className="inputbox reset" name="txtemail" id="txtemail" placeholder="Email :" required />
                                <select name="cmbtime" id="cmbtime" className="dropdown" required>
                                    <option value="">Preferred Timing</option>
                                    <option value="1"> 7am India</option>
                                    <option value="2"> 7am UAE</option>
                                    <option value="3"> 7am UK</option>
                                    <option value="4"> 7am USA</option>
                                    <option value="5"> 7am Perth/Singapore</option>
                                </select>
                                <div className="clear"></div>
                                <input type="submit" className="submit-btn reset" name="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                    <div className="col-3" >
                        <RightSide />
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};

export default SubscribeNewsletterPage;