import { infoType } from './../config/constants';

export class Utility {
    static toast(message, type) {
        const toastDuration = 5000;
        if (type.toUpperCase() === infoType.success.toUpperCase()) {
            Materialize.toast(message, toastDuration, 'green');
        } else if (type.toUpperCase() === infoType.info.toUpperCase()) {
            Materialize.toast(message, toastDuration, 'teal');
        } else if (type.toUpperCase() === infoType.error.toUpperCase()) {
            Materialize.toast(message, toastDuration, 'red');
        }
    }
}
