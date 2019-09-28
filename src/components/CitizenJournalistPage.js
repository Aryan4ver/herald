import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RightSide from './RightSide';

class CitizenJournalistPage extends React.Component {
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
    
        const city = $('#txtsubject').val().trim();
        if(city=='')
        {
            err++;
            $('#txtsubject').addClass('err-inputbox');
        }
        else
            $('#txtsubject').removeClass('err-inputbox');

        const message = $('#txtcomment').val().trim();
        if(message=='')
        {
            err++;
            $('#txtcomment').addClass('err-inputbox');
        }
        else
            $('#txtcomment').removeClass('err-inputbox');

        if(err==0)
        {
            const method = "POST";
            const body = new FormData(this.form);
            var that = this;
            fetch("https://www.heraldgoa.in/api/citizenjournalistmail.php", { method, body })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                alert(result.mail_status);
                $('#txtname').val('');
                $('#txtemail').val('');
                $('#txtcontact').val('');
                $('#txtsubject').val('');
                $('#txtcomment').val('');
                $('.file-info').html('');
                $('#real-input').val('');
                $('#txtyt').val('');
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
            <div className="news-content" id="citizen-page">
                <div className="container">
                    <div className="col-9">
                        <div className="citizen-box">
                            <div className="banner-box"> 
                                <img src="/img/citizen.jpg" className="citizen-img" />
                                <div className="citizen-content">
                                </div>
                                <div className="clear"></div>
                            </div>
                            <form className="contact-form" encType="multipart/form-data" ref={el => (this.form = el)} onSubmit={this.handleSubmit}>
                                <input type="text" className="inputbox reset" name="txtname" id="txtname" placeholder="Name :" required />
                                <input type="email" className="inputbox reset" name="txtemail" id="txtemail" placeholder="Email :" required />
                                <input type="text" className="inputbox reset" name="txtcontact" id="txtcontact" placeholder="Contact No. :" required />
                                <input type="text" className="inputbox reset" name="txtsubject" id="txtsubject" placeholder="Subject :" required />
                                <textarea rows="3" className="textarea-box" placeholder="Comment:" name="txtcomment" id="txtcomment" required></textarea>
                                <input type="text" className="inputbox reset" name="txtyt" id="txtyt" placeholder="Youtube URL :" />
                                <div className="input-container">
                                    <input type="file" id="real-input" name="file_image" onClick={this.handleFileUpload} />
                                    <div className="browse-btn" onClick={this.handleFileUpload}> Add Image </div>
                                    <div className="file-info" onClick={this.handleFileUpload}>Upload image :</div>
                                </div>
                                <div className="clear"></div>
                                <input type="submit" className="submit-btn reset" name="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                    <div className="col-3" >
                        <RightSide citizenJournalist={1}/>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};

export default CitizenJournalistPage;