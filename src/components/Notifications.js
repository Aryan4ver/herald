import React from 'react';
import ReactDOM from 'react-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.createNotification(props.type);
    }

    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };
    

    render() {
        return (
            <div>
                <NotificationContainer/>
            </div>
        );
    }
}
 
export default Notifications;